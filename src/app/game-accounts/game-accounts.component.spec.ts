import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAccountsComponent } from './game-accounts.component';

describe('GameAccountsComponent', () => {
  let component: GameAccountsComponent;
  let fixture: ComponentFixture<GameAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
