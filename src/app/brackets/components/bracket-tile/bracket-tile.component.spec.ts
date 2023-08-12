import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketTileComponent } from './bracket-tile.component';

describe('BracketTileComponent', () => {
  let component: BracketTileComponent;
  let fixture: ComponentFixture<BracketTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BracketTileComponent]
    });
    fixture = TestBed.createComponent(BracketTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
