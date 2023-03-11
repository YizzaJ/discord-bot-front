import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProviderComponent } from './modify-provider.component';

describe('ModifyProviderComponent', () => {
  let component: ModifyProviderComponent;
  let fixture: ComponentFixture<ModifyProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
