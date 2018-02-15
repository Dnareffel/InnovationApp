import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component'
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

import { RouterModule } from '@angular/router';
import { appRoutes }  from './routerConfig.';

import { HttpClientModule } from '@angular/common/http';

import { InnovService } from './services/innovations/innov.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';


import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    FooterComponent,
    NavbarComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    MaterializeModule
  ],
  providers: [InnovService],
  bootstrap: [AppComponent]
})
export class AppModule { }
