import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss','../../assets/css/global.scss']
})
export class ArticleComponent implements OnInit {
faLeftArrow = faAngleLeft
  constructor() { }

  ngOnInit(): void {
  }

}
