import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/IComment';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';
import { IPhotos } from '../interfaces/IPhotos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // BaseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) { }

  //* Un metodo para traer los posts
  getPosts():Observable<IPost[]> {
    //* end point
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    // return this.httpClient.get<IPost[]>(this.BaseUrl + '/posts');
    // return this.httpClient.get<IPost[]>(`${this.BaseUrl}/posts`);
  }
  
  //* Un metodo para traer los comentarios 
 //* Son 500 comentarios

  getComments():Observable<IComment[]> {
    return this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
  }

  //* Para traer al usuario por su Id
  // *id = 1, id = 2, id = 3
  getUserId(id: number):Observable<IUser> {
    // alt + 96
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/users' + '/'+ id);
   return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
   //* https://jsonplaceholder.typicode.com/users/1
  }

  //* Para traer a todos los usuarios (Un Array de 10 users (objetos))
  getUsersAll():Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }

//*Photos
  getPhotoId(id: number):Observable<IPhotos> { 
   return this.httpClient.get<IPhotos>(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }

  getPhotosAll():Observable<IPhotos[]> {
    return this.httpClient.get<IPhotos[]>('https://jsonplaceholder.typicode.com/photos')
  }

  
}

// control + alt + } + espacio