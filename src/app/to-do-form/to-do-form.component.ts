import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { taskItem } from '../services/taskItem';


@Component({
  selector: 'to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  //can below this be deleted
  @Input() valueFromParent:String ='this is child';
  @Output() childEvent:EventEmitter<string>= new EventEmitter();
  childMessage ="Data emitted from child to Parent";
// code above this can be deleted

  action='';
  priority='';
  submitBtnDisabled:boolean=true;

  taskList:taskItem[]=[];

  constructor() { }

  ngOnInit(): void {

    console.log(this.valueFromParent);
  }

  ngDoCheck()
  {
    if (this.action!='' && this.priority !='')
    {
      this.submitBtnDisabled=false;
    }
    else
    {
      this.submitBtnDisabled=true;
    }

  }

  onBtnClick()
  {
    console.log('Button Click');
    this.childEvent.emit(this.childMessage);

    if (this.action=='' || this.priority =='')
    {
      alert('Please enter valid data');

    }

    else
    {
      let newTaskItem =new taskItem(this.action,this.priority);
      console.log (newTaskItem);
      this.taskList.push(newTaskItem);
      this.action='';
      this.priority='';
      console.log(this.taskList);
    }


  }

}
