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
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
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

  removeSpecialChars(str) : string {
    return str.replace(/(?!\w|\s)./g, '')
      .replace(/\s+/g, ' ')
      .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
  }


}
