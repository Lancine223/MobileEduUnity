import { TestBed } from '@angular/core/testing';

import { AuthetudiantService } from './authetudiant.service';

describe('AuthetudiantService', () => {
  let service: AuthetudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthetudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
