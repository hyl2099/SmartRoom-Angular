import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { LoginComponent } from './login/login.component';
import { LoginDialogComponent  } from './core/login-dialog.component';

import { RegistroComponent } from './registro/registro.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PicturesComponent } from './pictures/pictures.component';
import {MatCardModule} from '@angular/material/card';
import {PictureCreateUpdateComponent} from './pictures/picture_creat_update_dialog/picture-create-update.component';
import {CrudComponent} from './core/crud.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {WelcomeComponent} from './welcome.component';
import {HomeComponent} from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {UsersCreationDialogComponent} from './home/users/users-creation-dialog.component';
import {UsersDetailDialogComponent} from './home/users/users-detail-dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CoreModule} from './core/core.module';
import {UsersComponent} from './home/users/users.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
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
    // CrudComponent,
    // LoginDialogComponent,
    HomeComponent,
    WelcomeComponent,
    UsersCreationDialogComponent,
    UsersDetailDialogComponent,
    UsersComponent
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
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    CoreModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
