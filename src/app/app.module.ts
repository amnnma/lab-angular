import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CountingComponent } from './counting/counting.component';
import { HomeComponent } from './home/home.component';
import { Lab4Component } from './lab4/lab4.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SearchbarComponent } from './home/navbar/searchbar/searchbar.component';
import { TopBannerComponent } from './home/top-banner/top-banner.component';
import { CategoryMenuComponentComponent } from './home/category-menu-component/category-menu-component.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SwiftviewComponent } from './swiftview/swiftview.component';

@NgModule({
  declarations: [
    AppComponent,
    CountingComponent,
    HomeComponent,
    Lab4Component,
    NavbarComponent,
    SearchbarComponent,
    TopBannerComponent,
    CategoryMenuComponentComponent,
    ToDoListComponent,
    SwiftviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
