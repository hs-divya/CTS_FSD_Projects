import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  user: User;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.user = this.router.getCurrentNavigation().extras.state.user as User;
  }

  ngOnInit() {
  }

}
