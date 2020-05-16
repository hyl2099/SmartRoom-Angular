import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {IndexcontentComponent} from './indexcontent/indexcontent.component';
import { PicturesComponent } from './pictures/pictures.component';
import { RegistroComponent } from './registro/registro.component';
import {MenuComponent} from './menu/menu.component';
import {PictureCreateUpdateComponent} from './pictures/picture_creat_update_dialog/picture-create-update.component';

const routes: Routes = [
  {path: '', component: IndexcontentComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'inicio', component: IndexcontentComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pictures/update', component: PictureCreateUpdateComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
