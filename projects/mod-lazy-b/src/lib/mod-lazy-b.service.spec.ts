import { TestBed } from '@angular/core/testing';

import { ModLazyBService } from './mod-lazy-b.service';

describe('ModLazyBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModLazyBService = TestBed.get(ModLazyBService);
    expect(service).toBeTruthy();
  });
});
