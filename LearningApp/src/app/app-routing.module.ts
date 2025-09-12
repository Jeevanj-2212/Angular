import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseChartComponent } from './DashboardComponent/expense-chart-component/expense-chart-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { HomePageComponent } from './DashboardComponent/home-page-component/home-page-component.component';
import { NavbarComponent } from './shared/navbar-component/navbar-component.component';
import { IncomeFormComponent } from './IncomeTrackerComponent/income-form-component/income-form-component.component';
import { IncomeProgressComponent } from './DashboardComponent/IncomeDisplayComponent/income-progress-component.component';
import { SummaryCardComponent } from './DashboardComponent/summary-card-component/summary-card-component.component';
import { SettingsComponent } from './settings-component/settings-component.component';
import { TransactionFormComponent } from './TransactionComponent/transaction-form-component/transaction-form-component.component';
import { TransactionListComponent } from './TransactionComponent/transaction-list-component/transaction-list-component.component';

const routes: Routes = [
 
  { path: '', redirectTo: 'HomePage', pathMatch: 'full' },
  { path: 'HomePage', component: HomePageComponent },
  { path: 'IncomeProgress', component: IncomeProgressComponent },
  { path: 'SummaryCard', component: SummaryCardComponent },
  { path: 'incomeTracker', component: IncomeFormComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'transactionForm', component: TransactionFormComponent },
  { path: 'transactionList', component: TransactionListComponent },


  { path: 'expense-chart', component: ExpenseChartComponent },
  { path: 'navbar', component: NavbarComponent },


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
