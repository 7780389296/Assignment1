import { Component, OnInit } from '@angular/core';
import { LoanServiceService } from '../loan-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private ts:LoanServiceService) { }
  
  public loans=[];
  ngOnInit(): void {
    this.loans=this.ts.getAllLoanDetails()
  }

}
