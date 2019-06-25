import { TestBed } from '@angular/core/testing';

import { ModLazyAService } from './mod-lazy-a.service';

describe('ModLazyAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModLazyAService = TestBed.get(ModLazyAService);
    expect(service).toBeTruthy();
  });
});
