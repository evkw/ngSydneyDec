import { Component, Input } from '@angular/core';

@Component({
  selector: 'submit-button',
  templateUrl: 'submit-button.component.html'
})
export class SubmitButtonComponent {
  @Input() btnText: string;
}
