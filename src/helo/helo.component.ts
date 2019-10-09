import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helo',
  templateUrl: './helo.component.html',
  styleUrls: ['./helo.component.css']
})
export class HeloComponent implements OnInit {
    course:string="angular!";
  constructor() { }

  ngOnInit() {
  }

}