import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DelEmployeeComponent } from './del-employee/del-employee.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {component:DashboardComponent,path:"Dashboard"},
  {component:AddEmployeeComponent,path:"Dashboard/Add"},
  {component:DelEmployeeComponent,path:"Dashboard/Delete"},
  {component:UpdateEmpComponent,path:"Dashboard/Update"},
  {component:EmployeeComponent,path:"Dashboard/AllData"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
