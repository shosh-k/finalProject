import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule} from '@angular/material/slider';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule} from '@angular/material/divider';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';







import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AppComponent } from './app.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { AdvertisementComponent } from './component/advertisement/advertisement.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './filter.pipe';
import { RouteComponent } from './component/route/route.component';
import { ChooseProductComponent } from './component/choose-product/choose-product.component';
import { ProductComponent } from './component/product/product.component';
import { HighlightDirective } from './highlight.directive';
import { CostOfferComponent } from './component/cost-offer/cost-offer.component';
import { AvgBuyOfUserComponent } from './component/avg-buy-of-user/avg-buy-of-user.component';
import { PaymentComponent } from './component/payment/payment.component';
//import { AgmCoreModule } from '@agm/core';
//import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    AdvertisementComponent,
    ProductsComponent,
    RouteComponent,
    ChooseProductComponent,
    ProductComponent,
    FilterPipe,
    HighlightDirective,
    CostOfferComponent,
    AvgBuyOfUserComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    GooglePlaceModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSliderModule,
    MatGridListModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTableModule
    //AgmCoreModule.forRoot({
    //    apiKey: environment.keys.gmap,
    //    libraries: ["places", "geometry"]
    //    /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
    //})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
