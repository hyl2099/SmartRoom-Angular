import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PicturesComponent } from './pictures/pictures.component';
import {MatCardModule} from '@angular/material/card';
import {PictureCreateUpdateComponent} from './pictures/picture_creat_update_dialog/picture-create-update.component';
import {CrudComponent} from './core/crud.component';
import {MatTableModule} from '@angular/material/typings/esm5/table';
import {MatIconModule} from '@angular/material/typings/icon';
// import { HiComponent } from './hi/hi.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    IndexcontentComponent,
    LoginComponent,
    PicturesComponent,
    RegistroComponent,
    PicturesComponent,
    PictureCreateUpdateComponent,
    CrudComponent
    // HiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
