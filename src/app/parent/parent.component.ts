import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  isChild = true;
  myName = '';
  state = '';
  about = '';
  userlist = ['Ram'];
  name ='Ram name';

  allowNewuser = false;
  userCreatedStatus = 'No User is Created';

  constructor() { 
    setTimeout(() => {
      this.allowNewuser = true;
    }, 3000);
    console.log("parent constructor is called");
  }

  ngOnInit(): void {
    console.log("parent OnInit is called");
    
  }

  ngOnChanges() {
    console.log("parent OnChanges is called");
  }

  ngDoCheck(){
    console.log("parent OnDoCheck is called");
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
  
  changeUserCreatedStatus() {
    this.userCreatedStatus = 'User is created';
  }
  
  onNameChanged() {
    this.name = 'hello ';
  }
  OnDeleteComponet() {
    this.userlist = [];
  }
}
