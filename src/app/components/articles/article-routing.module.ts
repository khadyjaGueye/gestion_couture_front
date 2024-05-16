import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: "", component: ArticleComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})



export class ArticleRoutingModule { }
