import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }

  constructor() { }

  ngOnInit() {
  }

}
