import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';  
import { Observable } from "rxjs/Observable";

import { StatetransferService } from '../statetransfer/statetransfer.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Injectable()
export class PageResolve implements Resolve<any> {

  isFirst = true;

  constructor(
    private http: Http, 
    private statetransferService:StatetransferService
  ) {}

  private resolveUrlSegment(urlseg) {
    let url = this.sanitizeUrlSegment(urlseg);
    return this.resolveUrl(url);
  }

  private resolveUrl(url:string) {
    //todo: remove default value, so a frontpage will actually work
    if(url === '/') { url='/bICCgfCphK'; }
    const requestUrl = 'http://www.json-generator.com/api/json/get'+url;

    //const requestUrl = url+'?getAsJson=1';

    const firstPage = this.statetransferService.getAndForget('firstpage');
    if(firstPage) {
      this.isFirst = false;
      return Observable.of(firstPage);
    }

    return this.http.get(requestUrl)
      .map(response => response.json())
      .do(data => {
        if(this.isFirst) {
          this.statetransferService.put('firstpage', data);
        }
      })
  }

  private sanitizeUrlSegment(url) {
    return '/' + url.reduce((acc, segment) => {
      return acc + segment.path + '/';
    }, '');
  }

  public resolve(route: ActivatedRouteSnapshot) {
    return this.resolveUrlSegment(route.url);
  }

}