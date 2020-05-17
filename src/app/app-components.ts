import {HomeComponent} from './home/home.component';
import {UsersComponent} from './home/users/users.component';
import {WelcomeComponent} from './welcome.component';
import {PicturesComponent} from './pictures/pictures.component';
import {UsersCreationDialogComponent} from './home/users/users-creation-dialog.component';
import {UsersDetailDialogComponent} from './home/users/users-detail-dialog.component';

export class AppComponents {
  static COMPONENTS = [
    HomeComponent,
    UsersComponent,
    WelcomeComponent,
    PicturesComponent
  ];

  static DIALOGS = [
    UsersCreationDialogComponent,
    UsersDetailDialogComponent
  ];
}
