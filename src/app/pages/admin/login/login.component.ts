import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginObjct :any={
  username:"",
  password:""
};
constructor(private router:Router){

}
onLog(){
if(this.loginObjct.username=='admin' && this.loginObjct.password=='1234'){
// alert("login seccucfully")
this.router.navigateByUrl("product");
}else{
alert("password or username erreur")
}

}
}
