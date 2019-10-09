import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hello',
  template:`
            <p>
              Hello {{ courseName }}
            </p>
          `,
  styles: [`p{ color: blue; }`]
})
export class HelloComponent implements OnInit {
  courseName: string = "Angular";

  changeName(){
    this.courseName="Typescript";
  }


  constructor() { }
  ngOnInit() {
  }
}
