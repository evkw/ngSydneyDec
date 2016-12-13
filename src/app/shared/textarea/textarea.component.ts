import { Component, Input } from '@angular/core';
import { AbstractValueAccessor } from '../util/abstract-value-accessor';
import { makeValueProvider } from '../util/make-value-provider.function';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  providers: [makeValueProvider(TextareaComponent)]
})
export class TextareaComponent extends AbstractValueAccessor {
  @Input('label') label: string;
}
