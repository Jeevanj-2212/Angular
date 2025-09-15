import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SummaryCardComponent } from './DashboardComponent/summary-card-component/summary-card-component.component';
import { ExpenseChartComponent } from './DashboardComponent/expense-chart-component/expense-chart-component.component';
import { IncomeProgressComponent } from './DashboardComponent/IncomeDisplayComponent/income-progress-component.component';
import { ExpenditureListComponent } from './ExpenditureComponent/transaction-list-component/expenditure-list-component.component';
import { ExpenditureFormComponent } from './ExpenditureComponent/transaction-form-component/expenditure-form-component.component';
import { IncomeFormComponent } from './IncomeTrackerComponent/income-form-component/income-form-component.component';
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
    IncomeProgressComponent,
    ExpenditureListComponent,
    ExpenditureFormComponent,
    IncomeFormComponent,
    SettingsComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
