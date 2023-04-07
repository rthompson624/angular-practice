import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { SpecialButtonComponent } from './components/special-button/special-button.component';
import { BirdIsTheWordPipe } from './pipes/bird-is-the-word.pipe';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { NavHoverDirective } from './directives/nav-hover.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserViewComponent,
    UserEditComponent,
    SpecialButtonComponent,
    BirdIsTheWordPipe,
    TopNavBarComponent,
    NavHoverDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
