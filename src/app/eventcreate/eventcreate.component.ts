import { Component } from '@angular/core';

@Component({
  selector: 'app-eventcreate',
  templateUrl: './eventcreate.component.html',
  styleUrls: ['./eventcreate.component.scss'],
})
export class EventcreateComponent {
  selectedValues: string[] = [];
  date: Date | undefined;
}
