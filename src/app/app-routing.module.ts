import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore
import { LoginComponent } from './login/login.component';
// @ts-ignore
import {IndexcontentComponent} from './indexcontent/indexcontent.component';

import { PicturesComponent } from './pictures/pictures.component';
import { RegistroComponent } from './registro/registro.component';
// @ts-ignore
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {path: '', component: IndexcontentComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'inicio', component: IndexcontentComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
