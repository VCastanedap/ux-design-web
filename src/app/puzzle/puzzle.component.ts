import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  constructor(private router: Router) { }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }


  ngOnInit() {
  }

}
