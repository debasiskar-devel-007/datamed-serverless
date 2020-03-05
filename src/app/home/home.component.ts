import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private readonly meta: MetaService,) { window.scrollTo(500, 0);
  
    this.meta.setTitle('DataMed Unlimited - Home');
    this.meta.setTag('og:description', 'Advanced ANS Testing, Blood Card Testing, and Allergy Testing solutions that help in the early detection of potential risk factors in the areas of Diabetes, HIV, Cardiac, Allergy and several others.');
    this.meta.setTag('twitter:description', 'Advanced ANS Testing, Blood Card Testing, and Allergy Testing solutions that help in the early detection of potential risk factors in the areas of Diabetes, HIV, Cardiac, Allergy and several others.');

    this.meta.setTag('og:keyword', 'DataMed Unlimited Testing Solutions, ANS Testing Solutions, ANS Testing DataMed Unlimited, Blood Card Testing, Allergy Testing Solutions');
    this.meta.setTag('twitter:keyword', 'DataMed Unlimited Testing Solutions, ANS Testing Solutions, ANS Testing DataMed Unlimited, Blood Card Testing, Allergy Testing Solutions');

    this.meta.setTag('og:title', 'DataMed Unlimited - Home');
    this.meta.setTag('twitter:title', 'DataMed Unlimited - Home');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://datamedunlimited.com/home');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/Facebook_Meta_Image.jpg');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/Twitter_Meta_Image.jpg');
  
  
  }

  ngOnInit() {
  }

}
