import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { AddPersonComponent } from './cvTech/add-person/add-person.component';
import { DeletePersonComponent } from './cvTech/delete-person/delete-person.component';
import { ErrorComponent } from './cvTech/error/error.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'cv', component: CvComponent, children: [

    { path: '', component: CvComponent},
  { path: 'delete/:id', component: DeletePersonComponent },
  { path: 'add', component: AddPersonComponent },
  { path: ':id', component: CvComponent },
  ]},
  { path: '', component: CvComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
