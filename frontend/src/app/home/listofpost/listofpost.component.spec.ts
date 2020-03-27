import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofpostComponent } from './listofpost.component';

describe('ListofpostComponent', () => {
  let component: ListofpostComponent;
  let fixture: ComponentFixture<ListofpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
