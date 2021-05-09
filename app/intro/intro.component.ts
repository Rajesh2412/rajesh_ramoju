import { Component, OnInit } from '@angular/core';
import {  faAngular, faFacebookF, faGithub, faInstagram, faJs, faLinkedinIn, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss','../../assets/css/global.scss']
})
export class IntroComponent implements OnInit {
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

  downloadPdf() {
    const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/rajesh-portfolio-r2412.appspot.com/o/Rajesh-cover-letter.pdf?alt=media&token=eee4f666-31ce-4f67-8567-6b5dcb25e64e';
    const pdfName = 'rajesh_resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
