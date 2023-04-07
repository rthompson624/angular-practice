import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';
import { isConfigLoadedGuard } from './guards/is-config-loaded.guard';

const ROUTES: Route[] = [
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [isLoggedInGuard] },
  { path: 'users/:id', component: UserViewComponent, canActivate: [isLoggedInGuard] },
  { path: 'users', component: UsersComponent, canActivate: [isLoggedInGuard] },
  { path: 'posts', component: PostsComponent, canActivate: [isLoggedInGuard] },
  { path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule), canActivate: [isLoggedInGuard, isConfigLoadedGuard] },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
