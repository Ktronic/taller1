import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user!: IUser;
  // public user : IUser | any;
  // asignacion por assertion
  constructor(private activatedRoute:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    //* Aqui podriamos crear el método para capturar el id y hacer el llamado al Api
    this.getUserId();
  }

  // * el Método para traer al usuario y capturar el id

  getUserId() {
    this.activatedRoute.paramMap.subscribe( params => {
      // console.log(params); // * cual es respuesta que contiene este params
      // console.log(params.get('id'));
      // console.log(typeof(params.get('id')));
      let id = Number(params.get('id'));
      // console.log(typeof(id)); //* number
      // console.log(id);
      this.dataService.getUserId(id).subscribe( data => {
        console.log(data);
        this.user = data;
      });
    });
  }
}
