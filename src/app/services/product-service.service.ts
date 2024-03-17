import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from './constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient ) {   
  }

getCategoreis(){
  return this.http.get(constant.API_URL+constant.method.GET);

}
}