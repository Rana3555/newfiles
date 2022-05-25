import { Component, OnInit } from '@angular/core';
import { RestService } from 'rest.service';
import { Users } from 'users';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.sass']
})
export class RestComponent implements OnInit {
  Users: Users[] = [];
  firstName: any;
  p: number = 1;
  constructor(public rs: RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.Users = response;
    });
  }
  Search(){
    if(this.firstName == "") {
      this.ngOnInit();
    } else {
      this.Users = this.Users.filter(res => {
        return res. firstName?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }
  key: string = 'id';
  reverse:boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
