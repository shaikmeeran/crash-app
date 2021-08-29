import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { empty } from "rxjs";
import { catchError } from "rxjs/operators";
import { DataStorageService } from "src/app/shared/data-storage.service";

@Injectable({
providedIn: 'root'
})
export class CrashListingResolverService implements Resolve<any> {
  constructor(private dataStorageService: DataStorageService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorageService.getCrashData();
  }
}