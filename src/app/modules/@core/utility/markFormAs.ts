import { FormArray, FormControl, FormGroup } from '@angular/forms';

export function markFormAs(
  formGroup: FormGroup,
  option: 'markAsTouched' | 'markAsDirty' = 'markAsTouched',
  onlyWithValue?: boolean
): void {
  if (formGroup.controls) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];
      if (onlyWithValue) {
        if (control.value) {
          execute(control, option);
        }
      } else {
        execute(control, option);
      }
    });
  }
}

const execute = (control, option) => {
  if (control instanceof FormControl) {
    control[option]();
    control.updateValueAndValidity();
  } else if (control instanceof FormGroup) {
    markFormAs(control);
  } else if (control instanceof FormArray) {
    control.controls.forEach((ctrl: FormGroup) => markFormAs(ctrl));
  }
};
