import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private api: DataserviceService) {}
  userform = new FormGroup({
    'eid': new FormControl(''),
    'name': new FormControl(''),
    'gen': new FormControl(''),
    'email': new FormControl(''),
    'phone': new FormControl(''),
    'desg': new FormControl(''),
    'sal': new FormControl('')
  })
  Emp() {
    console.log(this.userform.value);
    this.api.addData(this.userform.value).subscribe((res) => {
      console.log(res, 'Data Added in Database')
    })
  }
}
