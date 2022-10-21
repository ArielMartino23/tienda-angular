import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerServersComponent } from './server-servers/server-servers.component';
import { ServerAboutComponent } from './server-about/server-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'servers',
    pathMatch: 'full' 
  },
  {
    path: 'servers',
    component: ServerServersComponent 
  },
  {
    path: 'about',
    component: ServerAboutComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
