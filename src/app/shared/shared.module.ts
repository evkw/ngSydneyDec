import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { textRequiredDirective } from './directives/required.directive';
import { TextInputComponent } from './text-input/text-input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { BoxComponent } from './content-box/content-box.component';
import { ContentContainerComponent } from './content-container/content-container.component';

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
    PageTitleComponent,
    BoxComponent,
    ContentContainerComponent,
    TextareaComponent
  ],
  declarations: [
    textRequiredDirective,
    TextInputComponent,
    SubmitButtonComponent,
    PageTitleComponent,
    BoxComponent,
    ContentContainerComponent,
    TextareaComponent
  ]
})
export class SharedModule { }
