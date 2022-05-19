import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanServiceService } from '../loan-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private st:LoanServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public loanForm= new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    la: new FormControl(),
    dol: new FormControl(),
    tenure: new FormControl(),
    roi: new FormControl()
  })
  add(){
    console.log(this.loanForm.value)
    this.st.addLoanDetail(this.loanForm.value)
  }
}
