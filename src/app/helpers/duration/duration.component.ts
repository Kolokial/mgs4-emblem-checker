import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';

export class Duration {
  constructor(public hours: number, public minutes: number, public seconds: number) {}
  getDurationInSeconds(): number {
    return this.hours * 3600 + this.minutes * 60 + this.seconds;
  }

  getDurationAsString(withLeadingZeros: boolean = false): string {
    if (withLeadingZeros) {
      return `${this.getHoursWithLeadingZero()}:${this.getMinutesWithLeadingZero()}:${this.getSecondsWithLeadingZero()}`;
    }

    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }

  getHoursWithLeadingZero(): string {
    return this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
  }

  getMinutesWithLeadingZero(): string {
    return this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
  }

  getSecondsWithLeadingZero(): string {
    return this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
  }
}

@Component({
  selector: 'duration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './duration.component.html',
  styleUrl: './duration.component.scss',
  providers: [{ provide: MatFormFieldControl, useExisting: DurationComponent }],
})
export class DurationComponent implements MatFormFieldControl<Duration>, ControlValueAccessor {
  static nextId = 0;
  @ViewChild('hours') hoursInput: ElementRef;
  @ViewChild('minutes') minutesInput: ElementRef;
  @ViewChild('seconds') secondsInput: ElementRef;

  durationParts: FormGroup;
  stateChanges = new Subject<void>();
  focused: boolean;
  shouldLabelFloat: boolean;
  controlType?: string;
  autofilled?: boolean;
  userAriaDescribedBy?: string;
  onChange = (newDuration: Duration) => {};
  onTouched = () => {};

  @HostBinding() id = `example-tel-input-${DurationComponent.nextId++}`;
  touched: boolean;

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder: string;

  private get hoursControl(): AbstractControl {
    return this.durationParts.controls['hours'];
  }

  private get minutesControl(): AbstractControl {
    return this.durationParts.controls['minutes'];
  }

  private get secondsControl(): AbstractControl {
    return this.durationParts.controls['seconds'];
  }

  get empty() {
    let n = this.durationParts.value;
    return !n.hours && !n.minutes && !n.seconds;
  }

  @Input() get value(): Duration {
    return new Duration(
      this.hoursControl.value,
      this.minutesControl.value,
      this.secondsControl.value
    );
  }

  set value(duration: Duration | null) {
    duration = duration || new Duration(null, null, null);
    this.durationParts.setValue({
      hours: duration.hours,
      minutes: duration.minutes,
      seconds: duration.seconds,
    });
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(req: BooleanInput) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.durationParts.disable() : this.durationParts.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  get errorState(): boolean {
    return this.durationParts.invalid && this.touched;
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private _formBuilder: FormBuilder,
    private _elementRef: ElementRef,
    private _focusMonitor: FocusMonitor
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.durationParts = this._formBuilder.group({
      hours: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(1)]],
      minutes: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(1)]],
      seconds: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(1)]],
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program');
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }

  handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }

  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched = true;
      this.focused = false;
      //this.onTouched();
      this.stateChanges.next();
    }
  }

  setDescribedByIds(ids: string[]): void {
    //throw new Error('Method not implemented.');
  }

  onContainerClick() {
    if (this.durationParts.controls['seconds'].valid) {
      this._focusMonitor.focusVia(this.secondsInput, 'program');
    } else if (this.durationParts.controls['minutes'].valid) {
      this._focusMonitor.focusVia(this.secondsInput, 'program');
    } else if (this.durationParts.controls['hours'].valid) {
      this._focusMonitor.focusVia(this.minutesInput, 'program');
    } else {
      this._focusMonitor.focusVia(this.hoursInput, 'program');
    }
  }

  writeValue(durationTime: string | number | Duration): void {
    if (typeof durationTime === 'string') {
      if (durationTime.match('^\\d+:\\d{2}:\\d{2}$')) {
        const [hours, minutes, seconds] = durationTime.split(':');
        this.value = new Duration(parseInt(hours), parseInt(minutes), parseInt(seconds));
      }
    } else if (typeof durationTime === 'number') {
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private durationValidation(): ValidatorFn {
    return (control: AbstractControl) => {
      //TODO: Validate minutes and seconds aren't above 59
      if (control == null) {
        return null;
      }
      const value: string = control.value;
      if (value.match('^\\d+:\\d{2}:\\d{2}$')) {
        return null;
      }
      return {
        test: false,
      };
    };
  }
}
