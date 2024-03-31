import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CreateStudentService } from '../create-student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentData:any=[]


public studentForm:FormGroup=new FormGroup(
  {
    name:new FormControl(),
    gender:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    batch:new FormControl(),
    address: new FormGroup({
      city:new FormControl(),
      mandal:new FormControl(),
      district:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()
    }),
    education:new FormArray([]),

    company:new FormGroup({
      name:new FormControl(),
      location:new FormControl(),
      package:new FormControl(),
      offerDate:new FormControl(),
    }),

    sourceType:new FormControl()
   
    
  }
)

get educationFormArray(){
  return this.studentForm.get('education') as FormArray
}

addForm(){
  this.educationFormArray.push(
    new FormGroup({
      qualification:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl()
    })
  )
}

submit(){
  console.log(this.studentForm)
  this._createStudentService.postFormData(this.studentForm.value).subscribe(
    (data:any)=>{
      alert("Created successfully")
    },(err:any)=>{
      alert("Internal server error")
    }
  )
}

delete(i:any){
  this.educationFormArray.removeAt(i)
}


constructor(private _createStudentService:CreateStudentService){
  this.studentForm.get('sourceType')?.valueChanges.subscribe(
    (data:any)=>{
      if(data == 'direct'){       
        this.studentForm.addControl('sourceFrom', new FormControl());
        this. studentForm.removeControl('referalName');
      }else{
        this.studentForm.addControl('referalName', new FormControl());
        this. studentForm.removeControl('sourceFrom');
      }
    }
  )
}

}
