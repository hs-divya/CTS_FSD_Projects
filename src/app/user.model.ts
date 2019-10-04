import {Project} from './project.model';
import {Experience} from './experience.model';
import {Qualification} from './qualification.model';


export class User {
  name: string;
  gender: string;
  dob: string;
  location: string;
  nationality: string;
  profile: string[];
  project: Project[];
  experience: Experience[];
  biography: Qualification[];
}


