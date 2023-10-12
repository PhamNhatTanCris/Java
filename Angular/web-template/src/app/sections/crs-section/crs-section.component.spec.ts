import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsSectionComponent } from './crs-section.component';

describe('CrsSectionComponent', () => {
  let component: CrsSectionComponent;
  let fixture: ComponentFixture<CrsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrsSectionComponent]
    });
    fixture = TestBed.createComponent(CrsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
