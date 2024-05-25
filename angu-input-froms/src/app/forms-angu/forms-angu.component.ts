import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormArray ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-forms-angu',
  templateUrl: './forms-angu.component.html',
  styleUrls: ['./forms-angu.component.scss']
})
export class FormsAnguComponent {



  public  form:FormGroup = new FormGroup ({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required])
  })
subbtn():void{
console.log(this.form);

}

}
