import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSpinnerComponent } from './shared-spinner.component';

describe('SharedSpinnerComponent', () => {
  let component: SharedSpinnerComponent;
  let fixture: ComponentFixture<SharedSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
