import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
 
export interface reportZoom {
  details: any;
}
 
@Component({
  selector: 'app-allergy-testing',
  templateUrl: './allergy-testing.component.html',
  styleUrls: ['./allergy-testing.component.css']
})


export class AllergyTestingComponent implements OnInit {



  constructor(public dialog: MatDialog) { window.scrollTo(500, 0);}


  ngOnInit() {

    console.warn(this.reportImg);
  }


  reportImg= [
    {id:"1", image:"../../../assets/images/REPORT_img1_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img1.jpg"},
    {id:"2", image:"../../../assets/images/REPORT_img2_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img2.jpg"},
    {id:"3", image:"../../../assets/images/REPORT_img3_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img3.jpg"},
    {id:"4", image:"../../../assets/images/REPORT_img4_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img4.jpg"},
    {id:"5", image:"../../../assets/images/REPORT_img5_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img5.jpg"},
    {id:"6", image:"../../../assets/images/REPORT_img6_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img6.jpg"},
    {id:"7", image:"../../../assets/images/REPORT_img7_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img7.jpg"},
    {id:"8", image:"../../../assets/images/REPORT_img8_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img8.jpg"},
    {id:"9", image:"../../../assets/images/REPORT_img9_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img9.jpg"},
    {id:"10", image:"../../../assets/images/REPORT_img10_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img10.jpg"},
    {id:"11", image:"../../../assets/images/REPORT_img11_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img11.jpg"},
    {id:"12", image:"../../../assets/images/REPORT_img12_sm.jpg", subtitle:"REPORT Form", bigImage:"../../../assets/images/REPORT_img12.jpg"},

]




openDialog(item:any): void {
  const dialogRef = this.dialog.open(reportZoom, {
   // width: '250px',
   data: { details: item },
   panelClass:'bigimageform'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   // this.animal = result;
  //  console.log(`Dialog result: ${result}`);
  });
}



 
}




@Component({
  selector: 'reportZoom',
  templateUrl: 'reportZoom.html',
})
export class reportZoom {

  constructor(
    public dialogRef: MatDialogRef<reportZoom>,
     @Inject(MAT_DIALOG_DATA)  public data: reportZoom) {
      // console.log("Modal data >>>--->", data);
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
