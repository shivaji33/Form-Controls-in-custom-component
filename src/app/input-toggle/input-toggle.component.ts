import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input-toggle",
  templateUrl: "./input-toggle.component.html",
  styleUrls: ["./input-toggle.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputToggleComponent),
      multi: true
    }
  ]
})
export class InputToggleComponent implements ControlValueAccessor {
  @Input()
  public required = false;

  @Input()
  public disabled = false;

  @Input()
  public toggle: boolean;
  public onChangeFn = (_: any) => {};

  public onTouchedFn = () => {};

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(obj: any): void {
    this.toggle = obj;
  }

  public onChange() {
    this.onChangeFn(this.toggle);
  }
}
