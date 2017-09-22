import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";

@Injectable()
export class GeolocationService {

  constructor(private http: HttpClient) { }
  
      getCurrentPosition(): Observable<Position> {
          return new Observable((observer: Observer<Position>) => {
              navigator.geolocation.getCurrentPosition(
                  (position: Position) => {
                      observer.next(position);
                      observer.complete();
                  },
                  (error: PositionError) => {
                      console.log('Geolocation service: ' + error.message);
                      observer.error(error);
                  }
              );
          });
      }
  
      getCurrentAddress(latitude, longitude): Observable<any> {
          return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude);
      }
}
