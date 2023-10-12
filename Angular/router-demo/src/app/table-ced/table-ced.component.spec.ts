import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCedComponent } from './table-ced.component';

describe('TableCedComponent', () => {
  let component: TableCedComponent;
  let fixture: ComponentFixture<TableCedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCedComponent]
    });
    fixture = TestBed.createComponent(TableCedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
