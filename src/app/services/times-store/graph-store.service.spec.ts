import { TestBed } from '@angular/core/testing';

import { GraphStoreService } from './graph-store.service';

describe('GraphStoreService', () => {
  let service: GraphStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
