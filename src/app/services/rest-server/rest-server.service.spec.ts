import { TestBed } from '@angular/core/testing';

import { RestServerService } from './rest-server.service';

describe('RestServerService', () => {
  let service: RestServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
