import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-first',
  template:`
            <p>
              Hello {{ courseName }}
            </p>
          `,
  styles: [`p{ color: blue; }`]
})
export class HelloComponent implements OnInit {
  courseName: string = "Angular";
  constructor() { }
  ngOnInit() {
  }
}
