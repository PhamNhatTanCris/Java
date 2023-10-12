import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsSectionComponent } from './alerts-section.component';

describe('AlertsSectionComponent', () => {
  let component: AlertsSectionComponent;
  let fixture: ComponentFixture<AlertsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsSectionComponent]
    });
    fixture = TestBed.createComponent(AlertsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
