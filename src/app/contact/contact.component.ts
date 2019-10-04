import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = 'Divya HS';
  phone = '9902305369';
  email = 'divyahs@email.com';
  constructor() { }

  ngOnInit() {
  }

}
