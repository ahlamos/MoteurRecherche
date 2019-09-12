import {Book} from './book';

export class ApiResult {
  kind: String;
  totalItems: Number;
  items: Array<Book>;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
