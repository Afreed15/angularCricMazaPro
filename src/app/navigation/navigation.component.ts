import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  myimage2:string="assets/images/iconbat.png";
  myimage3:string="assets/images/cricket.png";
  myimage4:string="assets/images/group.png";
  myimage5:string="assets/images/Matchesicon.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
