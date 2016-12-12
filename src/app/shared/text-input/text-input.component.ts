import { Component, Input } from '@angular/core';
import { AbstractValueAccessor } from '../util/abstract-value-accessor';
import { makeValueProvider } from '../util/make-value-provider.function';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  providers: [makeValueProvider(TextInputComponent)]
})
export class TextInputComponent extends AbstractValueAccessor {
  @Input('label') label: string;
}
