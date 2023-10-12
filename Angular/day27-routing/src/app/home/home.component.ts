import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  article$!: Observable<Article[]>;
  constructor() { }

  ngOnInit(): void {
    
  }


}
