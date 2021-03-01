import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  showNav = false;
  constructor() { }

  ngOnInit(): void {

  }
  @HostListener("window:scroll", ['$event'])
  scrollMe(event) {
    console.log("scrolerl" + window.pageYOffset);
    if (window.pageYOffset > 400) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }
  }

}
