import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YahtzeeLoginComponent } from './yahtzee-login.component';

describe('YahtzeeLoginComponent', () => {
  let component: YahtzeeLoginComponent;
  let fixture: ComponentFixture<YahtzeeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YahtzeeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YahtzeeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
