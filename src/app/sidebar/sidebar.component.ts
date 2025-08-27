import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userPhoto = 'assets/user.jpg';
  userId = '2001934';
  userName = 'Francesz Jhans Robles Tolentino';
  course = 'BSIT';
  yearLevel = '4';

  navItems = [
    { label: 'Personal Data', icon: 'assignment_ind', link: '/main/(div:personal-data)' },
    { label: 'Grades', icon: 'assignment', link: '/main/(div:grades)' },
    { label: 'Class Schedule', icon: 'calendar_today', link: '/main/(div:class-schedule)' },
    { label: 'Exam Schedule', icon: 'date_range', link: '/main/(div:exam-schedule)' },
    { label: 'Assessment', icon: 'assessment', link: '/main/(div:assessment)' },
    { label: 'Open Codes', icon: 'code', link: '/main/(div:open-codes)' },
    { label: 'Checklist', icon: 'reorder', link: '/main/(div:checklist)' },
    { label: 'LMS Access Codes', icon: 'list_alt', link: '/main/(div:LMS-access-codes)' },
    { label: 'Enrollment', icon: 'chrome_reader_mode', link: '/main/(div:enrollment)' },
    { label: 'Faculty Evaluation', icon: 'event_note', link: '/main/(div:faculty-evaluation)' }
  ];

  onPhotoError(event: any) {
    event.target.src = 'assets/noimage.jpg';
  }


}
