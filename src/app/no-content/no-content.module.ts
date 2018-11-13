import { NgModule } from '@angular/core';
import { NoContentComponent } from './no-content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NoContentComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
})
export class NoContentModule {
}
