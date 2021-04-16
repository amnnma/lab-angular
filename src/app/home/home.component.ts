import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count = 0;
  constructor() { }

  countNumber() {
    this.count = this.count + 1;
  }
  ngOnInit(): void {
  }

}
