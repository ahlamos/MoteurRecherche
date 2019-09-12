import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private author: String;
  private title: String;
  private searchValue:string;
  defaultlang;
  constructor(private router: Router,public translate:TranslateService) {
      translate.addLangs(['anglais','francais']);
      this.defaultlang=navigator.language;
      if(this.defaultlang="fr-FR"){
        translate.setDefaultLang('francais');
      }
      else if(this.defaultlang="en-EN") {
        translate.setDefaultLang ('anglais');
      }
      const browserLang=translate.getBrowserLang();
      translate.use(browserLang.match(/anglais|francais/)?browserLang:translate.getDefaultLang());
  }


  ngOnInit() {
    this.getLocalStorageValues();
    console.log(this.defaultlang);
  }

  search() {

    this.setLocalStorageValues(this.searchValue);
    this.router.navigate(['/result'], {queryParams: {searchValue: this.searchValue}});
  }

  getLocalStorageValues() {
    this.author = JSON.parse(localStorage.getItem('searchValue')) || '';
  }

  setLocalStorageValues(searchValue) {
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
  }

  getAuthor() {
    return this.author;
  }

  getTitle() {
    return this.title;
  }
}
