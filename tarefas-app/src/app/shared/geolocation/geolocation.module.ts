import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeolocationService } from './geolocation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GeolocationService]
})
export class GeolocationModule { }
