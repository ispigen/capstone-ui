import { Component, OnInit } from '@angular/core';

interface Schedule {
  id: number;
  subject: string;
  date: string;
  time: string;
  room: string;
}
@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  schedules: Schedule[] = [
    { id: 1, subject: 'Math 101', date: '2025-09-01', time: '08:00 AM', room: 'Room 201' },
    { id: 2, subject: 'Physics 202', date: '2025-09-02', time: '10:00 AM', room: 'Room 105' },
    { id: 3, subject: 'CS 303', date: '2025-09-03', time: '01:00 PM', room: 'Room 310' }
  ];

  editing: Schedule | null = null;

  startEdit(schedule: Schedule) {
    this.editing = { ...schedule }; 
  }

  saveEdit() {
    if (this.editing) {
      const index = this.schedules.findIndex(s => s.id === this.editing!.id);
      this.schedules[index] = this.editing;
      this.editing = null;
    }
  }

  cancelEdit() {
    this.editing = null;
  }
  constructor() { }

  ngOnInit() {
  }

}
