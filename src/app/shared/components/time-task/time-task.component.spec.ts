import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTaskComponent } from './time-task.component';

describe('TimeTaskComponent', () => {
  let component: TimeTaskComponent;
  let fixture: ComponentFixture<TimeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
