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

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.search(this.searchTerms)
      .subscribe(results => {
        this.results = results.results;
      });
  }


}
