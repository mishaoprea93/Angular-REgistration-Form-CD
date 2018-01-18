import { Component } from '@angular/core';
// import { EqualValidator } from './equal-validator.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [EqualValidator]
})
export class AppComponent {
  flag=false;
  users=[];
  user={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    passwordConfirmation:'',
    streetAddress:'',
    unit:'',
    city:'',
    state:'',
    mood:''
  }
  onSubmit(){
    this.users.push(this.user);
    console.log(this.users);
    this.flag=true;    
    this.user={
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      passwordConfirmation:'',
      streetAddress:'',
      unit:'',
      city:'',
      state:'',
      mood:''
    }
    this.flag=true;
  }
}
