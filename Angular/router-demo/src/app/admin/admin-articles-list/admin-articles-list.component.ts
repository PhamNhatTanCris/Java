import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/articles/articles';
import { ArticlesService } from 'src/app/articles/articles.service';

@Component({
  selector: 'app-admin-articles-list',
  templateUrl: './admin-articles-list.component.html',
  styleUrls: ['./admin-articles-list.component.css']
})
export class AdminArticlesListComponent implements OnInit{
  articles$!: Observable<Article[]>;
  constructor(private _api: ArticlesService) {}

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}
