import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Article } from '../articles';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: ['./articles-detail.component.css']
})
export class ArticlesDetailComponent {
  article$!: Observable<Article | undefined>;
  constructor(private _route: ActivatedRoute, private _api: ArticlesService) {}
  ngOnInit(): void {
    this.article$ = this._route.paramMap.pipe(
      map(params => params.get('slug')),
      switchMap(slug => this._api.getArticleBySlug(slug || ''))
    );
  }
}
