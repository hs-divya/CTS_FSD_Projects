import {Component, OnInit} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  routes = [
    { linkName: 'Profile Highlights', url: 'profile'},
    { linkName: 'Projects', url: 'project'},
    { linkName: 'Experience', url: 'experience'},
    { linkName: 'Personal Biography', url: 'biography'},
    { linkName: 'Contact Me', url: 'contact'}
  ];
  user: User;

  constructor() {
    this.user = new User();
    this.user.name = 'Divya H S';
    this.user.gender = 'Female';
    this.user.dob = new Date().toLocaleDateString();
    this.user.location = 'Bangalore';
    this.user.nationality = 'Indian';
    this.user.profile = [
      'Experience in Angular and JAVA.',
      'Involved in various projects implementing Waterfall SDLC methodologies',
      'Good Team player and quick learner'
    ];
    this.user.project = [
     {
       name: 'Core Banking System',
       role: 'Development and Application support',
       technology: 'Java,Spring,Hibernate,SQL',
       description: 'Core banking functions differ depending on the specific type of bank. ' +
         'Retail banking, for example, is geared towards individual customers; ' +
         'wholesale banking is business conducted between banks; and securities trading involves the buying and selling of stocks, ' +
         'shares and so on. Core banking systems are often specialized for a particular type of banking. Products that are designed ' +
         'to deal with multiple types of core banking functions are sometimes referred to as universal banking systems.Core banking ' +
         'solutions (CBS) are the bank’s centralised systems that are responsible for ensuring seamless workflow by automating the ' +
         'frontend and backend processes within a bank.',
       responsibility: 'Analysis, design & Development. Post-production maintenance & support.'
     },
      {
        name: 'Internet Banking System',
        role: 'Development and application support',
        technology: 'Spring Boot,Angular,ORACLE',
        description: 'Internet Banking System refers to systems that enable bank customers to Access accounts and general ' +
          'Information on bank products and services through a personal computer or other intelligent device.' +
          'The chances and threats that the internet symbolizes is no longer news to the present day banking ' +
          'sector. No traditional bank would dare face investment analysts without an Internet strategy. The main ' +
          'intention behind the commencement of electronic banking services is to provide the customers with an ' +
          'alternative that is more responsive and with less expensive options. With options just a click away, ' +
          'customers have more control than ever. Their expectations are usability and real-time answers.',
        responsibility: 'Analysis, design & Development. Post-production maintenance & support.'
      }
    ];
    this.user.experience = [
     {organisation: 'Company #1', location: 'Bangalore', from: 'June,2014', to: 'April,2016', role: 'Software Engineer'},
     {organisation: 'Company #2', location: 'Bangalore', from: 'June,2016', to: 'Present', role: 'Software Engineer'}
    ];
    this.user.biography = [
      {degree: 'B.E (CSE)', board: 'VTU', percentage: '72%', year: '2014'},
      {degree: '12th', board: 'PUC', percentage: '66%', year: '2010'},
      {degree: '10th', board: 'SSLC', percentage: '83%', year: '2008'}
    ];
  }
  ngOnInit() {
  }
}
