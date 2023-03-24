import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProfileService implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http
      .get(imageUrl, {
        responseType: 'blob',
        headers: new HttpHeaders({ 'Content-Type': 'image/jpeg' }),
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}