import { TestBed } from '@angular/core/testing';

import { HttpClientLibraryService } from './http-client-library.service';

describe('HttpClientLibraryService', () => {
  let service: HttpClientLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
