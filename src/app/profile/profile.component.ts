import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user.model';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.user = this.router.getCurrentNavigation().extras.state.user as User;
  }

  ngOnInit() {
  }
}
