import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { IntroComponent } from './intro/intro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { InfoComponent } from './info/info.component';
import { ArticleComponent } from './article/article.component';
import { TechComponent } from './tech/tech.component';

const  firebase = {
  apiKey: "AIzaSyBBcXQnqYOHhtUhVpfxPX063RtJwPuFQ58",
  authDomain: "rajesh-portfolio-r2412.firebaseapp.com",
  projectId: "rajesh-portfolio-r2412",
  storageBucket: "rajesh-portfolio-r2412.appspot.com",
  messagingSenderId: "296588293911",
  appId: "1:296588293911:web:858298420b733943eb2952",
  measurementId: "G-9VNM453F5P"
}
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    IntroComponent,
    InfoComponent,
    ArticleComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
