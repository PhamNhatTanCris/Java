import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../articles';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit{
  articles$!: Observable<Article[]>;
  someSource$!: Observable<Article>;
  constructor(private _api: ArticlesService) { }

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
  @Output() someEvent = this.someSource$.pipe(

  );

}
