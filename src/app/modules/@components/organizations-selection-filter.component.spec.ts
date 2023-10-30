import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsSelectionFilterComponent } from './organizations-selection-filter.component';

describe('OrganizationsSelectionFilterComponent', () => {
  let component: OrganizationsSelectionFilterComponent;
  let fixture: ComponentFixture<OrganizationsSelectionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationsSelectionFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsSelectionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
