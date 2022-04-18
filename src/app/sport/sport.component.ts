import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {


  
  NewsData:any;

  constructor() { }

  ngOnInit(): void {

    this.NewsData={
      main : {},

    };

    this.getNewsData();
  }

  /** */
  getNewsData(){
    fetch('')
    .then(Response=>Response.json())
    .then(data=>{this.setNewsData(data);})

    let data = JSON.parse('');
    this.setNewsData(data);
  }

  /**Introducir los datos que vayamos a recojer API */
  setNewsData(data: any){

  }

}
