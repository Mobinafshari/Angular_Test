import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { NewTaskType } from './new-task/new-task.model';

@Component({
  selector: 'app-user-task',
  imports: [Task, NewTask],
  templateUrl: './user-task.html',
  styleUrl: './user-task.scss',
})
export class UserTask {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  isAddingTask = false;
  tasks = [
    {
      id: '1',
      userId: '1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: '2',
      userId: '3',
      title: 'React Hooks Deep Dive',
      summary:
        'Understand useState, useEffect, useReducer, and create custom hooks for reusability.',
      dueDate: '2025-09-15',
    },
    {
      id: '3',
      userId: '5',
      title: 'Dockerize Frontend Project',
      summary: 'Set up Docker for a React + Vite app and prepare for CI/CD pipeline integration.',
      dueDate: '2025-10-05',
    },
    {
      id: '4',
      userId: '2',
      title: 'Database Optimization',
      summary: 'Learn indexing and query optimization techniques in PostgreSQL.',
      dueDate: '2025-08-30',
    },
    {
      id: '5',
      userId: '6',
      title: 'Learn TypeScript Generics',
      summary: 'Understand and apply generics for building reusable components and utilities.',
      dueDate: '2025-09-25',
    },
    {
      id: '6',
      userId: '4',
      title: 'Unit Testing with Vitest',
      summary: 'Write unit tests for hooks and components using Vitest and React Testing Library.',
      dueDate: '2025-11-02',
    },
    {
      id: '7',
      userId: '2',
      title: 'Design System Exploration',
      summary: 'Research component export structures inspired by Material UI.',
      dueDate: '2025-12-01',
    },
    {
      id: '8',
      userId: '1',
      title: 'Next.js Internationalization',
      summary: 'Implement a multilingual dashboard with English and Persian translations.',
      dueDate: '2025-11-10',
    },
    {
      id: '9',
      userId: '5',
      title: 'Flutter Basics',
      summary: 'Learn Dart and build a simple mobile app to get started with Flutter development.',
      dueDate: '2025-09-05',
    },
    {
      id: '10',
      userId: '6',
      title: 'System Design: Snapp Clone',
      summary: 'Design a ride-hailing system with features similar to Uber/Snapp.',
      dueDate: '2025-10-20',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.id);
  }

  completeTask(completedId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== completedId);
  }
  onStartAddingTask() {
    this.isAddingTask = true;
  }
  onCloseAddingTask() {
    this.isAddingTask = false;
  }
  handleCompleteTask(values: NewTaskType) {
    this.tasks.push({
      userId: this.id,
      id: new Date().getTime().toString(),
      ...values,
    });
    this.isAddingTask = false;
  }
}
