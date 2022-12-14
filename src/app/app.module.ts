import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import { FormsModule } from '@angular/forms';
import { ServerAboutComponent } from './server-about/server-about.component';
import { ServerCartComponent } from './server-cart/server-cart.component';
import { ServerServersComponent } from './server-servers/server-servers.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    ServerAboutComponent,
    ServerCartComponent,
    ServerServersComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
