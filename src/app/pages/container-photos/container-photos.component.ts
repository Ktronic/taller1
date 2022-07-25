import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IPhotos } from 'src/app/interfaces/IPhotos';

@Component({
  selector: 'app-container-photos',
  templateUrl: './container-photos.component.html',
  styleUrls: ['./container-photos.component.scss']
})
export class ContainerPhotosComponent implements OnInit {

  public photos: IPhotos [] = [];
  public photoFilter: IPhotos [] = [];

  //public imagen: string  = "https://i.linio.com/p/3eebd43470916f18151d45c8e962560e-product.webp";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPhotosApi();
  }

  getPhotosApi() {
    this.dataService.getPhotosAll().subscribe( data => {
      console.log(data);
      this.photos = data; 
    });
  }

  getPhotoByIdApi(id:number) {
    this.photoFilter = this.photos.filter( photo => photo.id === id );
    console.log(this.photoFilter);
   };

  }

