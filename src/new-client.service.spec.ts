import { TestBed } from '@angular/core/testing';

import { NewClientService } from './app/service/new-client.service';

describe('NewClientService', () => {
  let service: NewClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
