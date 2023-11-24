import { Component } from '@angular/core';
interface Item {
  label: string;
  index: number;
}
@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.scss'],

})
export class EventpageComponent {
  items: Item[] = [];

    ngOnInit(): void {
        for (let i = 0; i < 20; i++) {
            this.items.push({ label: 'Item #' + i, index: i });
        }
    }
visible: boolean = false;
    showDialog() {
        this.visible = true;
    }
}
