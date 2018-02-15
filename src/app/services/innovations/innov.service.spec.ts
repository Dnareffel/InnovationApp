import { TestBed, inject } from '@angular/core/testing';

import { InnovService } from './innov.service';

describe('InnovService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InnovService]
    });
  });

  it('should be created', inject([InnovService], (service: InnovService) => {
    expect(service).toBeTruthy();
  }));
});
