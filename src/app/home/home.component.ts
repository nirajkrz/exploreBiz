import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SearchService]
})

export class HomeComponent implements OnInit {
  results: Object;
  searchTerms = new Subject<string>();
  details: Object;
  detailsAvailable: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.searchPlaces(this.searchTerms)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  getPlaceDetails(id: string): void{
    this.searchService.getPlaceDetails(id).subscribe(results => {
      this.details = results.result;
      this.detailsAvailable = true;
    })
  }

  focusFunction(): void {
    //hide details div
    this.detailsAvailable = false;
  }


}
