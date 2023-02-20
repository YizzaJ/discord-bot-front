import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxNewsComponent } from './max-news.component';

describe('MaxNewsComponent', () => {
  let component: MaxNewsComponent;
  let fixture: ComponentFixture<MaxNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
