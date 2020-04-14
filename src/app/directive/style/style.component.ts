import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

color: 'blue';
bgcolor: 'red';
size = '25px'
  constructor() { }

  ngOnInit(): void {
  }
  
  changesize(size){

    this.size = size + 'px';

  }

}
