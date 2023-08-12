import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:'user-list',component:UsersComponent},
  {path:'user/:id',component:UserPageComponent},
  {path:'posts/:id',component:PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
