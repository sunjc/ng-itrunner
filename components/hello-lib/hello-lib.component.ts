import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ni-hello',
  template: `
    <p>
      NG-iTRunner works!
    </p>
  `,
  styles: [
  ],
})
export class NiHelloLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
