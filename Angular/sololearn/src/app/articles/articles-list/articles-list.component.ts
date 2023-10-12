import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../articles';
import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit{
  articles$!: Observable<Article[]>;
  constructor(private _api: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}
