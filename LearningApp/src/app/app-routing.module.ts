import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseChartComponentComponent } from './DashboardComponent/expense-chart-component/expense-chart-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
 
{ path: '', redirectTo: 'expense-chart', pathMatch: 'full' },

  
  { path: 'expense-chart', component: ExpenseChartComponentComponent },

  
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
