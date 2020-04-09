import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiHelloLibComponent } from './hello-lib.component';

describe('NiHelloLibComponent', () => {
  let component: NiHelloLibComponent;
  let fixture: ComponentFixture<NiHelloLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiHelloLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiHelloLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
