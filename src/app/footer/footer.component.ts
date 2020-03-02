import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface openConditionsModal {
  details: any;
}


export interface openPrivacyModal {
  details: any;
}


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openConditions(): void {
    const dialogRef = this.dialog.open(openConditionsModal, {
    //  width: '250px',
     // data: {name: this.name, animal: this.animal}
     
   panelClass:'footermodal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    //  this.animal = result;
    });
  }


  openPrivacy(): void {
    const dialogRef = this.dialog.open(openPrivacyModal, {
    //  width: '250px',
     // data: {name: this.name, animal: this.animal}
     
   panelClass:'footermodal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    //  this.animal = result;
    });
  }





}



@Component({
  selector: 'openConditionsModal',
  templateUrl: 'openConditionsModal.html',
})
export class openConditionsModal {

  constructor(
    public dialogRef: MatDialogRef<openConditionsModal>,
     @Inject(MAT_DIALOG_DATA)  public data: openConditionsModal) {
      // console.log("Modal data >>>--->", data);
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



@Component({
  selector: 'openPrivacyModal',
  templateUrl: 'openPrivacyModal.html',
})
export class openPrivacyModal {

  constructor(
    public dialogRef: MatDialogRef<openPrivacyModal>,
     @Inject(MAT_DIALOG_DATA)  public data: openPrivacyModal) {
      // console.log("Modal data >>>--->", data);
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
}