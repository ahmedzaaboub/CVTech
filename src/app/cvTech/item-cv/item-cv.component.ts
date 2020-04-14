import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/models/Personne';



@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
 @Input() personne: Personne;
@Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(){

    //emmettre un evenement
    this.selectedPersonne.emit(
      this.personne
    );
  }
}
