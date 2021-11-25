import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from 'src/app/services/common.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
   target:string='';
  allBooks:any[]=[];
  filterBooks:any[]=[];
  searchtext:string='';
  toggle:boolean= false;
  link='http://bookcart.azurewebsites.net/Upload/';

  constructor(private _myService: CommonService, private domSanitizer: DomSanitizer){
    
  }

  ngOnInit(): void {
    this._myService.getAllBooks().subscribe((data)=> {this.allBooks= data; this.filterBooks= data});
    
  }
  applyFilter(val:any){
    
     this.allBooks = this.filterBooks.filter((book)=>
      book.title.toLocaleLowerCase().includes(val.toLocaleLowerCase()) ||
      book.author.toLocaleLowerCase().includes(val.toLocaleLowerCase()) ||
      book.category.toLocaleLowerCase().includes(val.toLocaleLowerCase())
     );
  }
 public loadImage(url:string){
    
    return this.link+url
  }

  public addToCartlist(bookId:any){
    this._myService.addToCartlist(bookId).subscribe((data)=>{
      console.log('success')
    })
  }
  public addTowishlist(bookId:any){
    this.toggle = !this.toggle
    this._myService.addToWishlist(bookId).subscribe((data)=>{
      console.log('success')
    })
  }

}
