import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  toggle = new FormControl({value: false, disabled: false});
  ngOnInit() {
    this.toggle.valueChanges.subscribe(res => {
      console.log(res);
    });
  }
}
