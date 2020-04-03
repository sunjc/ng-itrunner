import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgItrunnerComponent } from './ng-itrunner.component';

describe('NgItrunnerComponent', () => {
  let component: NgItrunnerComponent;
  let fixture: ComponentFixture<NgItrunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgItrunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgItrunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
