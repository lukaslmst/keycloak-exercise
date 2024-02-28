import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayinfoComponent} from "./displayinfo/displayinfo.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-displayinfo', component: DisplayinfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
