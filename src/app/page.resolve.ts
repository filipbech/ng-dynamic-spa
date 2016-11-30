import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';  
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class PageResolve implements Resolve<any> {

  constructor(private http: Http) { }

  public resolveUrlSegment(urlseg) {
    let url = this.sanitizeUrlSegment(urlseg);
    return this.resolveUrl(url);
  }

  public resolveUrl(url:string) {
    return this.http.get('http://www.json-generator.com/api/json/get'+url)
      .map(response=> response.json());
  }

  private sanitizeUrlSegment(url) {
    return '/'+url.reduce((acc, segment) => {
      return acc+segment.path+'/';
    }, '');
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.resolveUrlSegment(route.url);
  }

}