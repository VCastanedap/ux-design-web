import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  constructor(private router: Router) { }


  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }


  ngOnInit() {
  }

}
