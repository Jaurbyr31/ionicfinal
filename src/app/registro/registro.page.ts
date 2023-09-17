import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  irLogin(){
    this.router.navigate(['./login'])
  }
}
