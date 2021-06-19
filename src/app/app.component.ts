import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'completeProject';
  dataToChild="Hi, this is parent";

  getChildData(data:String)
  {
    console.log (data);

  }
}
