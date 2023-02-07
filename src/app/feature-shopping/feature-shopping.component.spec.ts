import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureShoppingComponent } from './feature-shopping.component';

describe('FeatureShoppingComponent', () => {
  let component: FeatureShoppingComponent;
  let fixture: ComponentFixture<FeatureShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
