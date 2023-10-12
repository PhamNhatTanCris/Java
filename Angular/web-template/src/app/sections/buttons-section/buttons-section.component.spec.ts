import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsSectionComponent } from './buttons-section.component';

describe('ButtonsSectionComponent', () => {
  let component: ButtonsSectionComponent;
  let fixture: ComponentFixture<ButtonsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsSectionComponent]
    });
    fixture = TestBed.createComponent(ButtonsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
