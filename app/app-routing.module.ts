import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { BaseComponent } from './base/base.component';
import { InfoComponent } from './info/info.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
    {
      path:'intro', component:BaseComponent, children:[
        {path:'', component: InfoComponent},
        {path:'articles', component: ArticleComponent},
        {path:'technologies',component:TechComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
