import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesEditComponent } from './articles-edit.component';

describe('ArticlesEditComponent', () => {
  let component: ArticlesEditComponent;
  let fixture: ComponentFixture<ArticlesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesEditComponent]
    });
    fixture = TestBed.createComponent(ArticlesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
