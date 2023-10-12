import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { UserService } from "../user.service";
import { ArticlesService } from "./articles.service";

@Injectable({
  providedIn: 'root',
})

export class CanEditArticlesGuard implements CanActivate {
  constructor(private userService: UserService, private acticlesService: ArticlesService) { }

  canActivate(
    next: ActivatedRouteSnapshot | any,
    state: RouterStateSnapshot
  ):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.acticlesService.getArticleBySlug(next.paramMap.get('slug')).pipe(
      map(articles => articles!.author === this.userService.currentUser.username)
    );
  }

}
