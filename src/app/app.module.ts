import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import {FormsModule} from "@angular/forms";
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { EventpageComponent } from './eventpage/eventpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { PaypageComponent } from './paypage/paypage.component';
import { EventcreateComponent } from './eventcreate/eventcreate.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { VirtualScrollerModule } from 'primeng/virtualscroller';


@NgModule({
  declarations: [
    AppComponent,
    EventpageComponent,
    NavbarComponent,
    PaypageComponent,
    EventcreateComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        AppRoutingModule,
        CalendarModule,
        FormsModule,
        CheckboxModule,
        StyleClassModule,
        InputTextModule,
        ProgressBarModule,
        MatToolbarModule,
        TabMenuModule,
        ImageModule,
        DialogModule,
        RadioButtonModule,
        InputTextareaModule,
        FileUploadModule,
        ToastModule,
        VirtualScrollerModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
