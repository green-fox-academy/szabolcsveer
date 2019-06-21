import { TestBed } from '@angular/core/testing';

import { RetrieveWeatherService } from './retrieve-weather.service';

describe('RetrieveWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieveWeatherService = TestBed.get(RetrieveWeatherService);
    expect(service).toBeTruthy();
  });
});
