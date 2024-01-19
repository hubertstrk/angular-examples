import { Component, OnInit } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

@Component({
  selector: 'app-root',
  template: `
    <full-calendar [options]="calendarOptions">
      <!-- <ng-template #eventContent let-arg>
        <div style="display: flex; flex-direction: column; padding: 5px; border: 1px solid rgb(5, 5, 200, 0.5); background-color: rgb(5, 5, 200, 0.1) ">
          <div><b>{{ arg.event.title }}</b></div>
          <div>{{arg.event.start.toLocaleTimeString()}}-{{arg.event.end.toLocaleTimeString()}}</div>
        </div>
      </ng-template> -->
    </full-calendar>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  foo = 0;
  calendarOptions: CalendarOptions = {};

  ngOnInit() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin],
      initialView: 'dayGridMonth',
      weekNumbers: true,
      nowIndicator: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay', // dayGridWeek,dayGridDay,
      },
      events: [{
        title: 'Düngen',
        start: new Date(2024, 0, 18, 8, 0, 0),
        end: new Date(2024, 0, 18, 18, 0, 0),
        color: 'red'
      },{
        title: 'Aussaat',
        start: new Date(2024, 0, 18, 10, 0, 0),
        end: new Date(2024, 0, 18, 12, 0, 0),
        color: 'yellow'
      }, {
        title: 'Pflegemaßnahme',
        start: new Date(2024, 0, 18, 13, 0, 0),
        end: new Date(2024, 0, 18, 17, 0, 0),
        color: 'pink',
      }, {
        title: 'Transport',
        start: new Date(2024, 0, 18, 18, 10, 0),
        end: new Date(2024, 0, 18, 21, 20, 0),
        color: 'blue',
      }, {
        title: 'Pflanzenschutz',
        start: new Date(2024, 1, 18, 10, 0, 0),
        end: new Date(2024, 1, 18, 18, 0, 0),
        color: 'blue',
      }]
    };
  }
}
