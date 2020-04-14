import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HeighlightDirective } from './directive/heighlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { AddPersonComponent } from './cvTech/add-person/add-person.component';
import { DeletePersonComponent } from './cvTech/delete-person/delete-person.component';
import { ErrorComponent } from './cvTech/error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginIntercepterProvider } from './intercepter/loginIntercepter';
import { SearchComponent } from './cvTech/search/search.component';





@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HeighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    DetailComponent,
    AddPersonComponent,
    DeletePersonComponent,
    ErrorComponent,
    LoginComponent,
    SearchComponent




  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginIntercepterProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
