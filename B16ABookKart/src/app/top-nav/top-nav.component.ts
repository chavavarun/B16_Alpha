import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  cartCount:any;
  wishCount:any;
  username:string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.username)
  }

}
