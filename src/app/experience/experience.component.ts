import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  user: User;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.user = this.router.getCurrentNavigation().extras.state.user as User;
  }

  ngOnInit() {
  }

}
