import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import { CheckDeactivate } from "../check-deactivate";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})

export class CanLeaveArticlesGuard implements CanDeactivate<CheckDeactivate>{
  canDeactivate(component: CheckDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.checkDeactivate(currentRoute, currentState, nextState);
  }

}
