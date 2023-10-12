import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesListComponent } from './admin-articles-list.component';

describe('AdminArticlesListComponent', () => {
  let component: AdminArticlesListComponent;
  let fixture: ComponentFixture<AdminArticlesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArticlesListComponent]
    });
    fixture = TestBed.createComponent(AdminArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
