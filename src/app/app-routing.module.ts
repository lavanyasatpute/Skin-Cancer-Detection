import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { UploadComponent } from './Components/upload/upload.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'upload',component:UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
