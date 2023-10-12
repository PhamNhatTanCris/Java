import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSectionComponent } from './angular-section.component';

describe('AngularSectionComponent', () => {
  let component: AngularSectionComponent;
  let fixture: ComponentFixture<AngularSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularSectionComponent]
    });
    fixture = TestBed.createComponent(AngularSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
