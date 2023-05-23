import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTodoItemPage } from './add-todo-item.page';

describe('AddTodoItemPage', () => {
  let component: AddTodoItemPage;
  let fixture: ComponentFixture<AddTodoItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTodoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
