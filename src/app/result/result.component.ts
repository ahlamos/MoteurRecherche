import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from './book/book.service';
import {Book} from './book/book';
import {BookFilterService} from "./book/book-filter.service";
import {MatDialog} from "@angular/material/dialog";
import {BookDetailsComponent} from "../book-details/book-details.component";
import {of} from "rxjs";
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private title: String;
  private author: String;
  private searchValue: string;
  private filterField: string;
  private books: Book[];
  private isInProgress: Boolean;
  private isError: Boolean;

  selectedField = [];


  constructor(private route: ActivatedRoute, private bookService: BookService, private bookFilterService: BookFilterService, private dialog: MatDialog) {
  }

  showDataOfChildComponent;
  filter = [];
  selectedItems = [];
  dropdownSettingsProduct = {};



  ngOnInit() {

    this.filter = [
      {item_id: 1, item_text: "Titre"},
      {item_id: 2, item_text: "Auteur"},
      {item_id: 3, item_text: "Editeur"},
      {item_id: 4, item_text: "Categorie"},


    ];
    this.dropdownSettingsProduct = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 7,
      allowSearchFilter: true
    };

    this.clearVariables ();
    this.route
      .queryParams
      .subscribe (params => {
        if (params) {
          this.setVariables (params);
          this.getBooksFromTheServer (this.searchValue);
        }
      });
  }

  setVariables(params) {
    this.searchValue = params['searchValue'];
  }

  clearVariables() {
    this.title = '';
    this.author = '';
    this.searchValue = '';
    this.filterField = '';
    this.books = [];
    this.isInProgress = true;
    this.isError = false;
  }

  getBooksFromTheServer(searchValue) {
    this.bookService.getBooks (searchValue)
      .subscribe (
        (result) => {
          this.books = result.items;
          this.isInProgress = false;
          this.isError = false;
        },
        (error) => {
          this.isInProgress = false;
          this.isError = true;
        });
  }

  getAuthor() {
    return this.author;
  }

  getTitle() {
    return this.title;
  }

  getBooks() {
    return this.books;
  }

  setBooks(books) {
    this.books = books;
  }

  onItemDeSelect(item: any) {
    console.log (item);
    const indice = this.selectedField.indexOf (item);

    var deleted = this.selectedField.splice (indice, 1);
    delete this.selectedField[indice];
  }

  onSelectAll(items: any) {
    console.log (items);
  }

  onItemSelect(item: any) {
    console.log (item.item_text);
    this.clearVariables ();
    if (item.item_text == "Auteur") {
      this.filterField = "inauthor";
    } else if (item.item_text == "Categorie") {
      this.filterField = "subject";
    } else if (item.item_text == "Titre") {
      this.filterField = "intitle";
    } else if (item.item_text == "Editeur") {
      this.filterField = "inpublisher";
    }
    this.route
      .queryParams
      .subscribe (params => {
        if (params) {
          this.setVariables (params);
          this.getBooksFilterFromTheServer (this.searchValue, this.filterField);
        }
      });
  }

  getBooksFilterFromTheServer(searchValue, filterField) {
    this.bookFilterService.getBooksFilter (searchValue, filterField)
      .subscribe (
        (result) => {
          this.books = result.items;
          this.isInProgress = false;
          this.isError = false;
        },
        (error) => {
          this.isInProgress = false;
          this.isError = true;
        });
  }
  openBookDetailsDialog(counter){
    var j =0;
    let key;
    for(key of Object.keys(this.books)){
      while(j<counter){
        j++;
      }
      break;
    }
    console.log(this.books[j].volumeInfo.title);
    const dialogRef=this.dialog.open(BookDetailsComponent,{
      width:'1000px',
      data: {
        title: this.books[j].volumeInfo.title,
        author: this.books[j].volumeInfo.authors,
        description: this.books[j].volumeInfo.description,
        editeur: this.books[j].volumeInfo.publisher,
        categorie: this.books[j].volumeInfo.categories,
        lien: this.books[j].volumeInfo.previewLink
      }
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.showDataOfChildComponent=result;
      console.log('here s the data result ${result}')
    })
  }


}



