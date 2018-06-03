import { RestAPIVerbs } from '../../enums/rest-api-verbs.enum';

export class RestServiceArgs<T> {
  Url: string;
  Type: RestAPIVerbs;
  data?: T;
}

