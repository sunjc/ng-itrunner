import { TestBed } from '@angular/core/testing';

import { NgItrunnerService } from './ng-itrunner.service';

describe('NgItrunnerService', () => {
  let service: NgItrunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgItrunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
