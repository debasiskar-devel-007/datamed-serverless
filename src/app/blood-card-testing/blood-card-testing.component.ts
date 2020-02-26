import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-blood-card-testing',
  templateUrl: './blood-card-testing.component.html',
  styleUrls: ['./blood-card-testing.component.css']
})
export class BloodCardTestingComponent implements OnInit {

  constructor(private readonly meta: MetaService,) { window.scrollTo(500, 0);
  
    this.meta.setTitle('DataMed Unlimited - Blood Card Testing Solutions');
    this.meta.setTag('og:description', 'Premium Blood Card Testing methods to help in the disease identification in the areas that include Diabetes, Malaria, Allergy, Cardiac, Syphilis, and HIV among a host of other medical conditions');
    this.meta.setTag('twitter:description', 'Premium Blood Card Testing methods to help in the disease identification in the areas that include Diabetes, Malaria, Allergy, Cardiac, Syphilis, and HIV among a host of other medical conditions');

    this.meta.setTag('og:keyword', 'DataMed Unlimited Blood Card Testing, Blood Card Testing DataMed Unlimited, Blood Card Testing Solutions, Blood Card Testing');
    this.meta.setTag('twitter:keyword', 'DataMed Unlimited Blood Card Testing, Blood Card Testing DataMed Unlimited, Blood Card Testing Solutions, Blood Card Testing');

    this.meta.setTag('og:title', 'DataMed Unlimited - Blood Card Testing Solutions');
    this.meta.setTag('twitter:title', 'DataMed Unlimited - Blood Card Testing Solutions');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/Facebook_Meta_Image.jpg');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/Twitter_Meta_Image.jpg');
  
  }


  ngOnInit() {
  }

}
