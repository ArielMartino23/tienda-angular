import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import { FormsModule } from '@angular/forms';
import { ServerAboutComponent } from './server-about/server-about.component';
import { ServerCartComponent } from './server-cart/server-cart.component';
import { ServerServersComponent } from './server-servers/server-servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    ServerAboutComponent,
    ServerCartComponent,
    ServerServersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
