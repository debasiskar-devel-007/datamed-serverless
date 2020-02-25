import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-rm3a',
  templateUrl: './rm3a.component.html',
  styleUrls: ['./rm3a.component.css']
})
export class Rm3aComponent implements OnInit {

  constructor(private readonly meta: MetaService,) { window.scrollTo(500, 0);
    this.meta.setTitle('DataMed Unlimited - RM-3A Testing');
    this.meta.setTag('og:description', 'DataMed Unlimited offers non-invasive tests and comprehensive reporting to assist in early detection of traditional risk factors, and enable physicians to offer improved patient care services.');
    this.meta.setTag('twitter:description', 'DataMed Unlimited offers non-invasive tests and comprehensive reporting to assist in early detection of traditional risk factors, and enable physicians to offer improved patient care services.');

    this.meta.setTag('og:keyword', 'DataMed Unlimited RM-3A Testing, RM-3A Testing DataMed Unlimited, RM-3A Testing, RM-3A Medical Device');
    this.meta.setTag('twitter:keyword', 'DataMed Unlimited RM-3A Testing, RM-3A Testing DataMed Unlimited, RM-3A Testing, RM-3A Medical Device');

    this.meta.setTag('og:title', 'DataMed Unlimited - RM-3A Testing');
    this.meta.setTag('twitter:title', 'DataMed Unlimited - RM-3A Testing');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/logo.png');
  
  }

  ngOnInit() {
  }

}
