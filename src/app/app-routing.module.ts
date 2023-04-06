import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';

const ROUTES: Route[] = [
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
