import { TestBed } from '@angular/core/testing';

import { NiHelloLibService } from './hello-lib.service';

describe('NiHelloLibService', () => {
  let service: NiHelloLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiHelloLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
