import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class SharedModule {
}
