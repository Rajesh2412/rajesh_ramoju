import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss','../../assets/css/global.scss']
})
export class TechComponent implements OnInit {
  faLeftArrow = faAngleLeft
  constructor() { }

  ngOnInit(): void {
  }

}
