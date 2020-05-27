import {Component, Inject} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {Picture} from '../pictures.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';
import {ListService} from './list.service';


@Component({
  templateUrl: './picture-create-update.component.html',
  styleUrls: ['./picture-create-update.component.css']
})
export class PictureCreateUpdateComponent {

  picture: Picture = {
    id:null,
    owner: null,
    uploadTime: null,
    path: null,
    photo: null
  };

  imgSrc = '../../../assets/images/nuevo.png';
  imgsrc = 'http://localhost:8888/images/nuevo.jpg';
  file:any;
  update: boolean;
  active: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any,
              private dialog: MatDialog,
              private message: MatSnackBar,
              private picturesService: PicturesService,
              public _d: DomSanitizer,
              private listservice:ListService) {
    this.update = data.update;
  }

  // 低级的savePicture post方法
  // createPicture() {
  //   this.picturesService.create(this.picture).subscribe(
  //     //执行成功以后通过路由进行组件跳转
  //     () => this.dialog.closeAll()
  //     , () => this.message.open('User created successfully', null, {
  //       duration: 2000,
  //     })
  //   );
  // }

  // 可以传送图片file的 post方法
  createPicture(){
    this.listservice.onSubmit(this.picture).subscribe(
      // 执行成功以后进行组件跳转
      () => this.dialog.closeAll()
      , () => this.message.open('User created successfully', null, {
        duration: 2000,
      })
    );
  }

  // 上传文件的input框的监听事件
  fileChange(e) {
    this.file = e.srcElement.files[0]; // 获取图片这里只操作一张图片
    this.imgsrc = window.URL.createObjectURL(this.file); // 获取上传的图片临时路径
  }
}
