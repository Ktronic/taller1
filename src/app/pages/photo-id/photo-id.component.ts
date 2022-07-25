import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IPhotos } from 'src/app/interfaces/IPhotos';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-photo-id',
  templateUrl: './photo-id.component.html',
  styleUrls: ['./photo-id.component.scss']
})
export class PhotoIdComponent implements OnInit {

  public photo!: IPhotos;

  constructor(private activatedRoute:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
  }

     getPhotoByIdApi() {
    this.activatedRoute.paramMap.subscribe( params => {
      // console.log(params); // * cual es respuesta que contiene este params
      // console.log(params.get('id'));
      // console.log(typeof(params.get('id')));
      let id = Number(params.get('id'));
      // console.log(typeof(id)); //* number
      // console.log(id);
      this.dataService.getPhotoId(id).subscribe( data => {
        console.log(data);
        this.photo = data;
      });
    });
  }

}
