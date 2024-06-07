import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent implements OnInit{
  form: FormGroup | undefined;
  constructor(){
    this.buildForm();
  }
  ngOnInit(): void {
    
  }

  private buildForm(){
      
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('',Validators.required),
      text: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    }
    )
  }

}
