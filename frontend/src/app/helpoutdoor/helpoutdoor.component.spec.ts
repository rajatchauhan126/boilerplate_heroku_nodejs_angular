import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpoutdoorComponent } from './helpoutdoor.component';

describe('HelpoutdoorComponent', () => {
  let component: HelpoutdoorComponent;
  let fixture: ComponentFixture<HelpoutdoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpoutdoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpoutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
