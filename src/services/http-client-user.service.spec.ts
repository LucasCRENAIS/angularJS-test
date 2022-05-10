import { TestBed } from '@angular/core/testing';

import { HttpClientGameAccountsService } from './http-client-user.service';

describe('HttpClientUserService', () => {
  let service: HttpClientGameAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientGameAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
