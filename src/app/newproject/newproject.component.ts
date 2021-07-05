import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.scss']
})
export class NewprojectComponent implements OnInit {
	PageTitle = '';
	lbObj = ['Project Name','Batch Name','Authors','Description','Action','Version','Jobstream'];
	template = ['Batch File','SQL File','CTL File'];
	//projCtlFiles = ['Account_table.ctl','VFA_AML.ctl','NRSBatch.ctl'];
	//projBatFiles = ['Account_table.bat','VFA_AML.bat','NRSBatch.bat'];
	//projSqlFiles = ['Account_table.SQL','VFA_AML.SQL','NRSBatch.SQL'];
  constructor() { 
	this.PageTitle = 'Project Details';
	}

  ngOnInit(): void {
  }

}
