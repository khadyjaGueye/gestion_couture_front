import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],

})
export class ArticleModule { }


