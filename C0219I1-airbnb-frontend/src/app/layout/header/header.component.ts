import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authories: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
    if(this.token.signOut){
      this.router.navigate(['/']);
    }
  }
}
