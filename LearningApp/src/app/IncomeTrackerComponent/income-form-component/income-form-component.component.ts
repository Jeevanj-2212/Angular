import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IncomeData } from './income.model';
@Component({
  selector: 'app-Income-form-component',
  templateUrl: './income-form-component.component.html',
  styleUrls: ['./income-form-component.component.scss']
})
export class IncomeFormComponent implements OnInit {
  incomeForm!: FormGroup
  incomeSource: string[] = ['Salary', 'Business', 'Investment', 'Other'];



  constructor() { }

  ngOnInit(): void {
    
    this.incomeForm = new FormGroup ( {
       source : new FormControl(''),
       amount : new FormControl(''),
       date : new FormControl('')
    });
  }
  onSubmit() {
    const val= this.incomeForm.value;
    console.log(val);
    const incomeMap = new Map<String,any>([
      ['source',val.source],
      ['amount',val.amount],
      ['date',val.date]
    ])
     console.log(incomeMap);
  }

}
