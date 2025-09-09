import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { SummaryCardComponentComponent } from './DashboardComponent/summary-card-component/summary-card-component.component';
import { ExpenseChartComponentComponent } from './DashboardComponent/expense-chart-component/expense-chart-component.component';
import { GoalProgressComponentComponent } from './DashboardComponent/goal-progress-component/goal-progress-component.component';
import { TransactionListComponentComponent } from './TransactionComponent/transaction-list-component/transaction-list-component.component';
import { TransactionFormComponentComponent } from './TransactionComponent/transaction-form-component/transaction-form-component.component';
import { GoalFormComponentComponent } from './GoalTrackerComponent/goal-form-component/goal-form-component.component';
import { SettingsComponentComponent } from './settings-component/settings-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    SummaryCardComponentComponent,
    ExpenseChartComponentComponent,
    GoalProgressComponentComponent,
    TransactionListComponentComponent,
    TransactionFormComponentComponent,
    GoalFormComponentComponent,
    SettingsComponentComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
