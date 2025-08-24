import { NgModule } from '@angular/core';
import { App } from './app';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { UserTask } from './user-task/user-task';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule, HeaderComponent, User, UserTask],
})
export class AppModule {}
