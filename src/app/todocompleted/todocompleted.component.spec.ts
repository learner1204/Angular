import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocompletedComponent } from './todocompleted.component';

describe('TodocompletedComponent', () => {
  let component: TodocompletedComponent;
  let fixture: ComponentFixture<TodocompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodocompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
