import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private readonly meta: MetaService,) { window.scrollTo(500, 0);
  
    this.meta.setTitle('DataMed Unlimited - Contact Us');
    this.meta.setTag('og:description', 'Submit and questions and queries that you may have about our products and testing services, and our support team will be happy to answer them as soon as we can.');
    this.meta.setTag('twitter:description', 'Submit and questions and queries that you may have about our products and testing services, and our support team will be happy to answer them as soon as we can.');

    this.meta.setTag('og:keyword', 'DataMed Unlimited Contact, Contact DataMed Unlimited, DataMed Unlimited Support, DataMed Unlimited Contact Us');
    this.meta.setTag('twitter:keyword', 'DataMed Unlimited Contact, Contact DataMed Unlimited, DataMed Unlimited Support, DataMed Unlimited Contact Us');

    this.meta.setTag('og:title', 'DataMed Unlimited - Contact Us');
    this.meta.setTag('twitter:title', 'DataMed Unlimited - Contact Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/Facebook_Meta_Image.jpg');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/Twitter_Meta_Image.jpg');
  
  }


  ngOnInit() {
  }

}
