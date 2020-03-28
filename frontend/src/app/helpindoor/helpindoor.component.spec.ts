import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpindoorComponent } from './helpindoor.component';

describe('HelpindoorComponent', () => {
  let component: HelpindoorComponent;
  let fixture: ComponentFixture<HelpindoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpindoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpindoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
