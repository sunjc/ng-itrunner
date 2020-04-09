import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ni-inline-login-form',
  template: `
    <form nz-form [nzLayout]="'inline'" [formGroup]="loginForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-group nzPrefixIcon="user">
            <input formControlName="username" nz-input placeholder="Username"/>
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group nzPrefixIcon="lock">
            <input formControlName="password" nz-input type="password" placeholder="Password"/>
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <button nz-button nzType="primary" [disabled]="!loginForm.valid">Log in</button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class NiInlineLoginFormComponent implements OnInit {
  @Output()
  login: EventEmitter<any> = new EventEmitter();

  loginForm: FormGroup;

  submitForm(): void {
    this.login.emit(this.loginForm.value);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
}
