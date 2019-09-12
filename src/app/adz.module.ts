import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AdzComponent} from './adz.component';
import {ResultComponent} from './result/result.component';
import {AdzRoutingModule} from './adz-routing.module';
import {PageNotFoundComponent} from './page-not-found.component';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatIconModule,
  MatDialog
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog'
import {ReactiveFormsModule} from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { BookDetailsComponent } from './book-details/book-details.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AdzComponent,
    ResultComponent,
    PageNotFoundComponent,
    SearchComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AdzRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,MatListModule, MatSelectModule, MatOptionModule, MatButtonModule,MatIconModule,ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AdzComponent],
  entryComponents : [BookDetailsComponent]
})
export class AdzModule {
}
