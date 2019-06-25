import { TestBed } from '@angular/core/testing';

import { ModLoaderService } from './mod-loader.service';

describe('ModLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModLoaderService = TestBed.get(ModLoaderService);
    expect(service).toBeTruthy();
  });
});
