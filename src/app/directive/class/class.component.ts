import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
 teams = ['om', 'barca', 'inter'];
  ess = false;
  milan  = true;
  barca  = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeTeam(team){

    this.ess = true;
    this.barca = false;
    this.milan = false;

  }

}
