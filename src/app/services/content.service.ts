import { Injectable, inject } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { userModel } from '../Models/user.interface';
import { postModel } from '../Models/post.interface';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private http = inject(HttpClient);
  private apiurl = 'https://jsonplaceholder.typicode.com/users';


  getAllUser(): Observable<userModel[]> {
    return this.http.get<userModel[]>(this.apiurl);
  }

  getUserById(id: number): Observable<userModel>{
    return this.http.get<userModel>(`${this.apiurl}/${id}`)
  }

  getPostsById(id: number): Observable<postModel[]>{
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }
}
