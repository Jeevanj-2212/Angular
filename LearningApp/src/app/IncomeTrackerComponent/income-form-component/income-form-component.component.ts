import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';




@Component({
  selector: 'app-Income-form-component',
  templateUrl: './income-form-component.component.html',
  styleUrls: ['./income-form-component.component.scss']
})
export class IncomeFormComponent implements OnInit {
  incomeForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.incomeForm = new FormGroup ( {
       source : new FormControl(''),
       amount : new FormControl(''),
       date : new FormControl('')
    });
  }
  onSubmit() {
     console.log(this.incomeForm.value);
  }

}
