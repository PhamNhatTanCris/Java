import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Article } from '../articles';
import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: ['./articles-detail.component.css']
})
export class ArticlesDetailComponent implements OnInit{
  article$!: Observable<Article | null | undefined>;
  constructor(private _route: ActivatedRoute, private _api: ArticleService) {}

  ngOnInit(): void {
    this.article$ = this._route.paramMap.pipe(
      map(params => params.get('slug')),
      switchMap(slug => this._api.getArticleBySlug(slug || ''))
    );
  }
}
