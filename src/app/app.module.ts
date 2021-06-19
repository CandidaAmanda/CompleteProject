import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { OutputGridComponent } from './output-grid/output-grid.component';
import { TaskHandlerService } from './services/task-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    HeaderComponent,
    OutputGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TaskHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
