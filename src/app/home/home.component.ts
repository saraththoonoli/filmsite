import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  trendingmovies:any
  Theatremovies:any
  popularmovies:any

  constructor(private http:HttpClient, private router:Router){

  }
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getpopularMovies();
    
  }

  getTrendingMovies(){
    this.http
    .get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies)=>{
      this.trendingmovies = movies;
      console.log(this.trendingmovies);
      

    })

  }


  getTheatreMovies(){
    this.http
    .get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movies)=>{
      this.Theatremovies = movies;
      console.log(this.Theatremovies);
      

    })

  }

  getpopularMovies(){
    this.http
    .get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movies)=>{
      this.popularmovies = movies;
      console.log(this.popularmovies);
      

    })

  }

goTomovie(type:string, id:string){
this.router.navigate(['movie',type,id])
}

  

}
