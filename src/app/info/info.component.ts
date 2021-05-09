import { Component, OnInit } from '@angular/core';
import {  faAngular, faFacebookF, faGithub, faInstagram, faJs, faLinkedinIn, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss','../../assets/css/global.scss']
})
export class InfoComponent implements OnInit {
  faGithub = faGithub;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faLinkedIn = faLinkedinIn;
  faMap = faMapMarkerAlt
  faAngular = faAngular;
  faReact = faReact;
  faJs = faJs
  faVue = faVuejs
  currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }


}
