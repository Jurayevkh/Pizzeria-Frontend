import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBasketComponent } from './empty-basket.component';

describe('EmptyBasketComponent', () => {
  let component: EmptyBasketComponent;
  let fixture: ComponentFixture<EmptyBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyBasketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
