import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NiInlineLoginFormModule} from 'ng-itrunner/inline-login-form';
import {NiHelloLibModule} from 'ng-itrunner/hello-lib';
import {en_US, NgZorroAntdModule, NZ_I18N, NzFormModule} from 'ng-zorro-antd';

import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NzFormModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NiHelloLibModule,
    NiInlineLoginFormModule,
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
