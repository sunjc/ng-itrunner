import {NgModule} from '@angular/core';
import {NiInlineLoginFormComponent} from './inline-login-form.component';
import {NzButtonModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NiInlineLoginFormComponent],
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule
  ],
  exports: [NiInlineLoginFormComponent]
})
export class NiInlineLoginFormModule {
}
