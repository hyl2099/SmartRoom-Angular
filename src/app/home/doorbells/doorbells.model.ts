export interface Doorbell {
  id: number ;
  owner: string;
  uploadTime: Date;
  path: string;
  photo: File;
  remark: string;
}
