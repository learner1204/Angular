import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodopendingComponent } from './todopending.component';

describe('TodopendingComponent', () => {
  let component: TodopendingComponent;
  let fixture: ComponentFixture<TodopendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodopendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodopendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
