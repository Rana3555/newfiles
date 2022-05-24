import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphsComponent } from './graphs/graphs.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeeComponent } from './homee/homee.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: "", pathMatch: "full",redirectTo: "/home"},
  { path: 'home', component:HomeComponent},
  { path: "header", component:HeaderComponent},
  { path:"reg",component:RegistrationComponent},
  { path:"login",component:LoginComponent},
  { path:"graphs",component:GraphsComponent},
  { path: 'homee', component: HomeeComponent },
  { path: 'user', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: AddUserComponent },
  { path: 'child', component:ChildComponent},
  { path: 'parent', component:ParentComponent},
  { path: 'life-cycle', component:LifeCycleComponent},
  {path: 'youtube', component:YoutubeComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
