import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SummaryCardComponent } from './DashboardComponent/summary-card-component/summary-card-component.component';
import { ExpenseChartComponent } from './DashboardComponent/expense-chart-component/expense-chart-component.component';
import { GoalProgressComponent } from './DashboardComponent/goal-progress-component/goal-progress-component.component';
import { TransactionListComponent } from './TransactionComponent/transaction-list-component/transaction-list-component.component';
import { TransactionFormComponent } from './TransactionComponent/transaction-form-component/transaction-form-component.component';
import { GoalFormComponent } from './GoalTrackerComponent/goal-form-component/goal-form-component.component';
import { SettingsComponent } from './settings-component/settings-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { HomePageComponent } from './DashboardComponent/home-page-component/home-page-component.component';
import { SharedModule } from "src/app/shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SummaryCardComponent,
    ExpenseChartComponent,
    GoalProgressComponent,
    TransactionListComponent,
    TransactionFormComponent,
    GoalFormComponent,
    SettingsComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
