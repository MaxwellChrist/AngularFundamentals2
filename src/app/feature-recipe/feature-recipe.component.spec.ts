import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRecipeComponent } from './feature-recipe.component';

describe('FeatureRecipeComponent', () => {
  let component: FeatureRecipeComponent;
  let fixture: ComponentFixture<FeatureRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
