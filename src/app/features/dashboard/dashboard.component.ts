import { Component, OnInit, inject } from '@angular/core';
import { TaskCardComponent } from './components/task-card/task-card.component';
import {
  StatusTaskEnum,
  TagsEnum,
  TaskModel,
} from '../../core/models/task.model';
import { MatIcon } from '@angular/material/icon';
import { ColumnsComponent } from './components/columns/columns.component';
import { Store } from '@ngrx/store';
import { loadTask } from './state/task.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskCardComponent, MatIcon, ColumnsComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private store = inject(Store);

  ngOnInit() {
    this.store.dispatch(loadTask());
  }

  tasks: TaskModel[] = [
    {
      id: '1',
      name: 'Task 1',
      tags: [TagsEnum.ANDROID, TagsEnum.IOS],
      status: StatusTaskEnum.BACKLOG,
      assignee: {
        id: 'user1',
        fullName: 'User One',
        email: 'user1@example.com',
        type: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=User+One',
      },
      creator: {
        id: 'user2',
        fullName: 'User Two',
        email: 'user2@example.com',
        type: 'user',
        avatar: 'https://ui-avatars.com/api/?name=User+Two',
      },
      dueDate: new Date('2024-06-17T00:00:00.000Z'),
      pointEstimate: '5',
      createdAt: new Date('2023-01-01T00:00:00.000Z'),
    },
    {
      id: '2',
      name: 'Task 2',
      tags: [TagsEnum.RAILS, TagsEnum.REACT],
      status: StatusTaskEnum.TODO,
      assignee: {
        id: 'user3',
        fullName: 'User Three',
        email: 'user3@example.com',
        type: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=User+Three',
      },
      creator: {
        id: 'user4',
        fullName: 'User Four',
        email: 'user4@example.com',
        type: 'user',
        avatar: 'https://ui-avatars.com/api/?name=User+Four',
      },
      dueDate: new Date('2024-12-31T00:00:00.000Z'),
      pointEstimate: '3',
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
    },
    {
      id: '3',
      name: 'Task 3',
      tags: [TagsEnum.REACT, TagsEnum.NODE_JS],
      status: StatusTaskEnum.IN_PROGRESS,
      assignee: {
        id: 'user5',
        fullName: 'User Five',
        email: 'user5@example.com',
        type: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=User+Five',
      },
      creator: {
        id: 'user6',
        fullName: 'User Six',
        email: 'user6@example.com',
        type: 'user',
        avatar: 'https://ui-avatars.com/api/?name=User+Six',
      },
      dueDate: new Date('2024-06-19T00:00:00.000Z'),
      pointEstimate: '8',
      createdAt: new Date('2024-06-01-19T00:00:00.000Z'),
    },
    {
      id: '4',
      name: 'Task 4',
      tags: [TagsEnum.ANDROID, TagsEnum.REACT],
      status: StatusTaskEnum.BACKLOG,
      assignee: {
        id: 'user7',
        fullName: 'User Seven',
        email: 'user7@example.com',
        type: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=User+Seven',
      },
      creator: {
        id: 'user8',
        fullName: 'User Eight',
        email: 'user8@example.com',
        type: 'user',
        avatar: 'https://ui-avatars.com/api/?name=User+Eight',
      },
      dueDate: new Date('2024-06-17T00:00:00.000Z'),
      pointEstimate: '6',
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
    },
    {
      id: '5',
      name: 'Task 5',
      tags: [TagsEnum.IOS, TagsEnum.NODE_JS],
      status: StatusTaskEnum.TODO,
      assignee: {
        id: 'user9',
        fullName: 'User Nine',
        email: 'user9@example.com',
        type: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=User+Nine',
      },
      creator: {
        id: 'user10',
        fullName: 'User Ten',
        email: 'user10@example.com',
        type: 'user',
        avatar: 'https://ui-avatars.com/api/?name=User+Ten',
      },
      dueDate: new Date('2027-12-31T00:00:00.000Z'),
      pointEstimate: '4',
      createdAt: new Date('2027-01-01T00:00:00.000Z'),
    },
    {
      id: '6',
      name: 'Task 6',
      tags: [TagsEnum.RAILS, TagsEnum.ANDROID],
      status: StatusTaskEnum.IN_PROGRESS,
      assignee: {
        id: 'user11',
        fullName: 'User Eleven',
        email: 'user11@example.com',
        type: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=User+Eleven',
      },
      creator: {
        id: 'user12',
        fullName: 'User Twelve',
        email: 'user12@example.com',
        type: 'user',
        avatar: 'https://ui-avatars.com/api/?name=User+Twelve',
      },
      dueDate: new Date('2028-12-31T00:00:00.000Z'),
      pointEstimate: '7',
      createdAt: new Date('2028-01-01T00:00:00.000Z'),
    },
  ];
}
