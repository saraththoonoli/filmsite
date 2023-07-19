import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService){

  }

ngOnInit(): void {
  
}


goTohome(){
this.router.navigate(['home']);
}

logout(){
  this.auth.logout()
}

}
