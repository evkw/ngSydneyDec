import { Component, Input } from '@angular/core';
import { AbstractValueAccessor } from '../util/abstract-value-accessor';
import { makeValueProvider } from '../util/make-value-provider.function';

@Component({
  selector: 'boris-text-input',
  templateUrl: 'boris-text-input.component.html',
  providers: [makeValueProvider(TextInputComponent)],
  styleUrls: ['../boris-form.css']
})
export class TextInputComponent extends AbstractValueAccessor {
  @Input('label') label: string;
}
