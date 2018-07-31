import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/userList', pathMatch: 'full' },
  { path: 'usersList', component: UserListComponent },
  { path: 'daily', component: UserListComponent },
  { path: 'brainstorm', component: UserListComponent },
  { path: 'course', component: UserListComponent },
  { path: 'levelingSystem', component: UserListComponent },
  { path: 'liveStreams', component: UserListComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'videoAnalytics', component: UserListComponent },
  { path: 'advanced', component: UserListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

