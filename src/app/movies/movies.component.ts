import { Movies } from './../interfaces/movies';
import { Component } from '@angular/core';
import { MoviesdataService } from '../services/moviesdata.service';
import { log } from 'console';


@Component({
  selector: 'app-movies',
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  dataMovies : Movies[] = []
  pathImg : string = "https://image.tmdb.org/t/p/w500"

  constructor(private moviesDataService:MoviesdataService){}

  ngOnInit(): void{
    this.moviesDataService.getMovies().subscribe({
      next: (response)=>{console.log(response.results)
        this.dataMovies = response.results
      },
      error: (err)=>{console.log(err)},
      complete:()=>{console.log("Completed");
      }
    })
  }
}
