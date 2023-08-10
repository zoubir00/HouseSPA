import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/Property-Card/Property-Card.component';
import { PropertyListComponent } from './Property/Property-list/Property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';

const appRoutes:Routes=[
  {path:'',component:PropertyListComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'rent-property', component:PropertyListComponent},
  {path:'property-detail/:id', component:PropertyDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavBarComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
