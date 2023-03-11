import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProviderComponent } from './remove-provider.component';

describe('RemoveProviderComponent', () => {
  let component: RemoveProviderComponent;
  let fixture: ComponentFixture<RemoveProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
