import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { RestService } from 'rest.service';
import { Users } from 'users';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.sass']
})
export class RestComponent implements OnInit {
  Users: Users[] = [];
  constructor(public rs:RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.Users = response;
    })
  }

}
