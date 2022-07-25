import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser [] = [];

  constructor(private dataService: DataService) { }
  // * para traer externa (API) hacia nuestro componente
  ngOnInit(): void {
    this.dataService.getUsersAll().subscribe( users => {
      // console.log(users[0].);
      this.users = users;
    })
  }

}
