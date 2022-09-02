import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message, Donation } from '../interfaces/tvscroller.interfaces'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  // Define the API
  IP = 'localhost'
  PORT = 3000
  API_URL = `http://${this.IP}:${this.PORT}/teleton/tvscroller`;
  // Dependency Injection
  constructor(private httpService: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Obtener los SMS que se deben de mostrar
  getMessages(): Observable<Message[]> {
    return this.httpService
      .get<Message[]>(this.API_URL + '/messages')
      .pipe(retry(1), catchError(this.handleError));
  }

  // Obtener la información de Donaciones
  getDonations(): Observable<Donation[]> {
    const url = `${this.API_URL}/donations`;
    return this.httpService.get<Donation[]>(url)
      .pipe(retry(1), catchError(this.handleError));
  }



  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `ERROR|Code:${error.status}|Message:${error.message}`;
    }
    console.log('Error rest-api-service:', errorMessage);
    return throwError(() => {
      return errorMessage;
    });

  }

}
