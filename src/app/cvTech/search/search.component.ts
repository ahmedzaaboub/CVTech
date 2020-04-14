import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: Personne[];
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.searchResult = [];
  }

  search(chaine){


console.log(chaine);
  }

  selectPersonne(personne: Personne){

    console.log(personne);

  }
}
