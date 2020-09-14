import { TestBed } from '@angular/core/testing';

import { CovidHttpServiceService } from './covid-http-service.service';

describe('CovidHttpServiceService', () => {
  let service: CovidHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
