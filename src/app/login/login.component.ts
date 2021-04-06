import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl} from '@angular/forms';
import { LoginService } from '../sharedlogin/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public objs:LoginService) { }

  ngOnInit(): void {
    this.objs.loginList();
  }
      

  
            

}
