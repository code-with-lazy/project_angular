import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
data: any;
  constructor(private api: DataserviceService) {}
  info: any;
  ngOnInit(): void {
    this.api.getAllUser().subscribe((res) => {
      console.log(res)
      this.info = res.data;
    })
  }


}
