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

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserViewComponent,
    UserEditComponent,
    SpecialButtonComponent
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
