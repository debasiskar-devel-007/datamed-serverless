import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private readonly meta: MetaService,) { window.scrollTo(500, 0);
    this.meta.setTitle('DataMed Unlimited - Meet The Team');
    this.meta.setTag('og:description', 'Meet the team that has enabled us to meet the Gold Standard in the ANS Testing industry and move beyond. Extremely qualified and highly experienced, our team of professional experts has helped us become a pioneer in the medical testing industry.');
    this.meta.setTag('twitter:description', 'Meet the team that has enabled us to meet the Gold Standard in the ANS Testing industry and move beyond. Extremely qualified and highly experienced, our team of professional experts has helped us become a pioneer in the medical testing industry.');

    this.meta.setTag('og:keyword', 'DataMed Unlimited Team, Team DataMed Unlimited, DataMed Unlimited Team Members, Team Members Of DataMed Unlimited');
    this.meta.setTag('twitter:keyword', 'DataMed Unlimited Team, Team DataMed Unlimited, DataMed Unlimited Team Members, Team Members Of DataMed Unlimited');

    this.meta.setTag('og:title', 'DataMed Unlimited - Meet The Team');
    this.meta.setTag('twitter:title', 'DataMed Unlimited - Meet The Team');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/logo.png');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/datamed-unlimited/assets/images/logo.png');
  
  }

  ngOnInit() {
  }

}
