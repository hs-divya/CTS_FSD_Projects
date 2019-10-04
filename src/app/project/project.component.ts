import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  user: User;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.user = this.router.getCurrentNavigation().extras.state.user as User;
  }

  ngOnInit() {
  }

}
