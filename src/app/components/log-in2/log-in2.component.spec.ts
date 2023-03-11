import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogIn2Component } from './log-in2.component';

describe('LogIn2Component', () => {
  let component: LogIn2Component;
  let fixture: ComponentFixture<LogIn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogIn2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogIn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
