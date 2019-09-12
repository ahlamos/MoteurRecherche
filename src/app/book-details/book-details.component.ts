import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ResultComponent} from "../result/result.component";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  recievedData;
  constructor(
  public dialogRef:MatDialogRef<ResultComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any ){

      this.recievedData=data;
  }
  ngOnInit() {
  }

}
