import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';  
import { Observable } from "rxjs/Observable";

import {CacheService} from '../shared/cache.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class PageResolve implements Resolve<any> {

  constructor(private http: Http, private cacheService: CacheService) { }

  public resolveUrlSegment(urlseg) {
    let url = this.sanitizeUrlSegment(urlseg);
    return this.resolveUrl(url);
  }

  public resolveUrl(url:string) {

    if(this.cacheService.get(url)) {
      return Observable.of(this.cacheService.get(url));
    }

    return this.http.get('http://www.json-generator.com/api/json/get'+url)
      .map(response=> response.json())
      .do(data => {
        this.cacheService.set(url,data);
      });
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