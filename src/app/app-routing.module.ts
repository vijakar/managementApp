import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard], children:[
    
    {path:"createstudent", component:CreateStudentComponent},
    {path:"allstudents", component:AllStudentsComponent}
  ]},
  {path:"",component:LoginComponent},
  {path:"**", component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
