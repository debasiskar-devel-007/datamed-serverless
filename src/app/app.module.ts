import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';


import { TopComponent } from './top/top.component';
import { FooterComponent,openConditionsModal,openPrivacyModal } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


import { DemoMaterialModule } from './material-module';
import { CookieService } from 'ngx-cookie-service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
 
import { FooterFormBlockComponent } from './footer-form-block/footer-form-block.component';
import { TeamComponent } from './team/team.component';
import { Rm3aComponent, rm3atestingZoom } from './rm3a/rm3a.component';
import { BloodCardTestingComponent } from './blood-card-testing/blood-card-testing.component';
import { AllergyTestingComponent,reportZoom } from './allergy-testing/allergy-testing.component';
import { ContactComponent } from './contact/contact.component';

import { MetaModule } from '@ngx-meta/core';
import { FacebookModule } from 'ngx-facebook';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FooterComponent,
    HomeComponent,
    FooterFormBlockComponent,
    TeamComponent,
    Rm3aComponent,
    BloodCardTestingComponent,
    AllergyTestingComponent,
    ContactComponent,
    reportZoom,
    rm3atestingZoom,
    openConditionsModal,
    openPrivacyModal
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MetaModule.forRoot(),
    FacebookModule.forRoot(),
  ],
  entryComponents: [reportZoom,rm3atestingZoom,openConditionsModal,openPrivacyModal],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
