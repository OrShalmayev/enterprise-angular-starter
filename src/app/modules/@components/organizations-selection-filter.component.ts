import {Component, ChangeDetectionStrategy, Input, OnInit, OnDestroy} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {combineLatest, Observable, of, Subject} from "rxjs";
import {
    catchError,
    debounceTime,
    distinctUntilChanged, filter,
    map,
    startWith,
    takeUntil,
} from "rxjs/operators";
import {Organization} from "@app/api/api.models";
import {FormControl} from "@angular/forms";
import {
    AutocompleteOrganizationService
} from "@app/operations/shared/services/autocomplete-organization/autocomplete-organization.service";
import {
    oceanCustomerByCriteriaConstants
} from "@app/operations/db-actions/get-actions/get-ocean-customers-by-criteria/constants/get-ocean-customers-by-criteria.constants";

@Component({
    selector: 'app-get-ocean-customers-by-criteria-organizations-selection-filter',
    templateUrl: './organizations-selection-filter.component.html',
    styleUrls: ['./organizations-selection-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationsSelectionFilterComponent implements OnInit, OnDestroy {
    private readonly destroyed$: Subject<void> = new Subject<void>();
    @Input() organizationsSelection!: SelectionModel<string>;
    // TODO create a global ngrx store to hold organizations
    readonly organizations$: Observable<string[]> = this.autocompleteOrganizationService.organizations$.pipe(
        map((organizations: Organization[]) => {
            return organizations.map(org => {
                return org.id.toString()
            })
        }),
        catchError(() => of([])),
    );
    readonly loadingOrganizations$: Observable<boolean> = this.autocompleteOrganizationService.loading$;
    readonly searchOrganizationControl: FormControl = new FormControl('');
    readonly searchOrganizationValueChange$: Observable<string> = this.searchOrganizationControl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        map(value => value.trim().toLowerCase()),
        distinctUntilChanged()
    );
    readonly filteredOrganizations$: Observable<string[]> = combineLatest([
        this.organizations$, this.searchOrganizationValueChange$
    ]).pipe(
        map(([organizations, search]) => {
            let retVal: string[] = organizations;
            const searchContentIsValid = Boolean(search.length);
            if (searchContentIsValid) {
                let filteredOrganizationsBySearch = organizations.filter(org => org.trim().toLowerCase().includes(search));
                retVal = filteredOrganizationsBySearch;
            }

            return retVal;
        })
    );
    dropDownItemHeight = oceanCustomerByCriteriaConstants.DROP_DOWN_ITEM_HEIGHT;
    listHeight$ = this.organizations$.pipe(
        map((items) => {
            const listOffsetHeight = items.length * this.dropDownItemHeight;
            const newContainerHeight = Math.min(listOffsetHeight, oceanCustomerByCriteriaConstants.DROP_DOWN_MAX_HEIGHT);
            const retVal = `${newContainerHeight}px`;

            return retVal;
        }),
    );
    isAllOrganizationsSelected$: Observable<boolean>

    constructor(
        private readonly autocompleteOrganizationService: AutocompleteOrganizationService
    ) {
    }

    ngOnInit(): void {
        this.organizations$.pipe(
            filter(organizations => {
                return Boolean(organizations.length)
            }),
            takeUntil(this.destroyed$),
        ).subscribe(organizations => {
            this.organizationsSelection.select(...organizations)
        });
        this.isAllOrganizationsSelected$ = combineLatest([this.organizationsSelection.changed, this.organizations$]).pipe(
            map(([selectedOrganizations, organizations]) => {
                return selectedOrganizations.source.selected.length === organizations.length;
            }),
        );
    }

    toggleOrganizations(organizationsIds: string[], allOrganizationsSelected: boolean): void {
        if (allOrganizationsSelected) {
            this.organizationsSelection.clear()
        } else {
            this.organizationsSelection.select(...organizationsIds);
        }
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
}
