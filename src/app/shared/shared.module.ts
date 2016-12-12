import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { textRequiredDirective } from './directives/required.directive';
import { TextInputComponent } from './text-input/text-input.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TextInputComponent,
    SubmitButtonComponent,
    PageTitleComponent
  ],
  declarations: [
    textRequiredDirective,
    TextInputComponent,
    SubmitButtonComponent,
    PageTitleComponent
  ]
})
export class SharedModule { }
