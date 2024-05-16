import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationRoutingModule } from './components/authentication/authentication-routing.module';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'article', loadChildren: () => import('./components/articles/article.module').then(m => m.ArticleModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationRoutingModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
