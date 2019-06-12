import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChannelsComponent } from './game-channels.component';

describe('GameChannelsComponent', () => {
  let component: GameChannelsComponent;
  let fixture: ComponentFixture<GameChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
