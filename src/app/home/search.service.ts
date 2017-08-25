import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
/**
** distinctUntilChanged will ensure that only distinct data passes through. If the user types something,
** erases a character quickly and then types back the same character,distinctUntilChanged will only send the data once.
***/
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { ClientAuth } from '../shared/constants';

@Injectable()
export class SearchService {
  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';

  private googleSearchPlacesUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
  private googlePlaceDetailsUrl = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        .map(res => res.json());
  }

  searchPlaces(entry: Observable<string>){
    return entry.debounceTime(400)
    .distinctUntilChanged()
    .switchMap(entry => this.searchPlacesAPI(entry));
  }

  searchPlacesAPI(entry){
    entry = entry.split(/(\s+)/).join('+');
    return this.http
    .get(this.googleSearchPlacesUrl +entry+ '&key='+ ClientAuth.G_KEY)
    .map(res => res.json());
  }

  getPlaceDetails(id){
    return this.http
    .get(this.googlePlaceDetailsUrl +id+'&key='+ ClientAuth.G_KEY)
    .map(res => res.json());
  }
}
