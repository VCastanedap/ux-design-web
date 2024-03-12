import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzles',
  templateUrl: './puzzles.component.html',
  styleUrls: ['./puzzles.component.css']
})
export class PuzzlesComponent implements OnInit {

  constructor(private router: Router) { }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  redirectToCrearPuzzle(): void {
    this.router.navigate(['/crearpuzzle']);
  }


  ngOnInit() {
  }

}
