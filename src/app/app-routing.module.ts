import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {IndexcontentComponent} from './indexcontent/indexcontent.component';
import { PicturesComponent } from './home/pictures/pictures.component';
import { RegistroComponent } from './registro/registro.component';
import {MenuComponent} from './menu/menu.component';
import {PictureCreateUpdateComponent} from './home/pictures/picture_creat_update_dialog/picture-create-update.component';
import {WelcomeComponent} from './welcome.component';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './home/users/users.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome'},
  {path: 'welcome', component: WelcomeComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'users', component: UsersComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'pictures', component: PicturesComponent},
      {path: 'pictures/update', component: PictureCreateUpdateComponent}
      // {path: 'videos', component: VideosComponent},
      // {path: 'doorbells', component: DoorbellsComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
