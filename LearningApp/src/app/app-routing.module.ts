import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseChartComponent } from './DashboardComponent/expense-chart-component/expense-chart-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { NavbarComponent } from './navbar-component/navbar-component.component';
import { HomePageComponent } from './DashboardComponent/home-page-component/home-page-component.component';

const routes: Routes = [
 
{ path: '', redirectTo: 'HomePage', pathMatch: 'full' },
{path: 'HomePage',component:HomePageComponent},

  
  { path: 'expense-chart', component: ExpenseChartComponent },
  {path:'navbar',component: NavbarComponent},

  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
