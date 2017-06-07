import { TestBed, inject } from '@angular/core/testing';

import { YahtzeeService } from './yahtzee.service';

describe('YahtzeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YahtzeeService]
    });
  });

  it('should be created', inject([YahtzeeService], (service: YahtzeeService) => {
    expect(service).toBeTruthy();
  }));
});
