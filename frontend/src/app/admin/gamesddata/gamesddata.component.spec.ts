import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesddataComponent } from './gamesddata.component';

describe('GamesddataComponent', () => {
  let component: GamesddataComponent;
  let fixture: ComponentFixture<GamesddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
