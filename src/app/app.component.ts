import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test'; 
  date: Date | undefined;
  value: number | undefined;
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Strona główna',routerLink:'/stronagłówna' ,icon: 'pi pi-fw pi-home' },
          { label: 'Informacje', icon: 'pi pi-fw pi-pencil' },
          { label: 'Logowanie', icon: 'pi pi-fw pi-user' },
          { label: 'Rejestracja', icon: 'pi pi-user-plus' }
      ];
  }
}
