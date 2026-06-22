import { TestBed } from '@angular/core/testing';

import { BoardMenuViewService } from './board-menu-view-service';

describe('BoardMenuViewService', () => {
  let service: BoardMenuViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardMenuViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
