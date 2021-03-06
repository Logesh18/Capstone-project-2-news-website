import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadingpage',
  templateUrl: './loadingpage.component.html',
  styleUrls: ['./loadingpage.component.css']
})
export class LoadingpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.navigate();
  }

  navigate(){
    setTimeout(() =>{
      this.router.navigateByUrl('login');
    }, 2500);
    
  }
}
