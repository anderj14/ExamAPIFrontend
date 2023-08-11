import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public user = {
    username : '',
    password : '',
    firstname : '',
    lastname : '',
    email : '',
    telephone : ''
  }

  constructor(private userService: UserService){}

  ngOnInit(): void{}

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('The username is required');
      return;
    }
    
    this.userService.registerUser(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('User save sucessfull')
      }, (error) => {
        console.log(error);
        alert('Error in the app')
      }
    )
  }
}
