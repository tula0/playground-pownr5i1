import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxechartsDemoComponent } from './ngxecharts-demo.component';

describe('NgxechartsDemoComponent', () => {
  let component: NgxechartsDemoComponent;
  let fixture: ComponentFixture<NgxechartsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxechartsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxechartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
