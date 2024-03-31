import { Component} from '@angular/core';
import { CreateStudentService } from '../create-student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']

})
export class AllStudentsComponent {

  // @ViewChild(MatPaginator) :MatPaginator;
  public filteredString:string='';
  public pageNo:number=0;
  public column:string=''
 public order:boolean=false;

public studentData:any=[]


  constructor(private _createStudentService:CreateStudentService){
    _createStudentService.getFormData().subscribe(
      (data:any)=>{
        this.studentData = data
      },(err:any)=>{
        alert("Internal server error")
      }
    )
    
  }




  getFiltered(){
    this._createStudentService.selectedStudent(this.filteredString).subscribe(
      (data:any)=>{
        this.studentData = data;
      },(err:any)=>{
        alert("Internal server error")
      }
    )
  }
   getPage(){
    this._createStudentService.getPages(this.pageNo).subscribe(
      (data:any)=>{
        this.studentData=data;
      },(err:any)=>{
        alert("Internal server error")
      }
    )
   } 

   sorted(){
        
   console.log("sorted")
   }

   delete(i:string){
    this._createStudentService.deleteApi(i).subscribe(
    (data:any)=>{
      alert("Deleted successfully")
      location.reload()
    },(err:any)=>{
      alert("Internal server error")
    }
  )
 }


 editName(studentObjt:any){
  studentObjt.isEdit=true;
    
 }

}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
