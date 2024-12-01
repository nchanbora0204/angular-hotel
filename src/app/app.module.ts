import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/user/header/header.component';
import { FooterComponent } from './shared/user/footer/footer.component';
import { LayoutComponent } from './shared/user/layout/layout.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
