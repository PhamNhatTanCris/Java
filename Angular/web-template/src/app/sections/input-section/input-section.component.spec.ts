import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSectionComponent } from './input-section.component';

describe('InputSectionComponent', () => {
  let component: InputSectionComponent;
  let fixture: ComponentFixture<InputSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSectionComponent]
    });
    fixture = TestBed.createComponent(InputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
