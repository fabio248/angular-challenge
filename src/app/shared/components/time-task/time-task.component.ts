import { Component, Input } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import dayjs from 'dayjs';

@Component({
  selector: 'app-time-task',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './time-task.component.html',
  styleUrl: './time-task.component.css',
})
export class TimeTaskComponent {
  @Input() dueDate!: Date;

  updateColorText() {
    const days = this.getDiffDays();

    switch (true) {
      case days < 0:
        return 'text-primary-4 bg-[#DA584B1A]';
      case days === 0:
      case days === 1:
        return 'text-tertiary-4 bg-[#E5B4541A]';
      default:
        return 'text-white bg-[#94979a1a]';
    }
  }

  getLabel() {
    const days = this.getDiffDays();

    switch (days) {
      case 0:
        return 'TODAY';
      case 1:
        return 'TOMORROW';
      default:
        return dayjs(this.dueDate).format('D MMM, YYYY').toUpperCase();
    }
  }

  getDiffDays() {
    const now = dayjs().startOf('day');
    const due = dayjs(this.dueDate).startOf('day');
    return due.diff(now, 'day');
  }
}
