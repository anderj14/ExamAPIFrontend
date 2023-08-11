import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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

  constructor(private userService: UserService, private snack: MatSnackBar){}

  ngOnInit(): void{}

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('Username required!', 'Acept', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }
    
    this.userService.registerUser(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Save user', 'Registered user in the app', 'success')
      },(error) => {
          console.log(error);
          this.snack.open('Error in the app!', 'Acept', {
            duration: 3000
          });
        }
    )
  }
}
