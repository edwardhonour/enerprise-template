import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}) 
export class DataResolver implements Resolve<boolean> {

  path: any;
  r: any;

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.path = '';

    if (state.url!==undefined) {
      this.path=state.url;
    }
    this.r=this.dataService.getData(this.path).pipe(catchError(err=>{
      return of(null)
    }));

    return (this.r);
  }
}
