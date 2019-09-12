import {VolumeInfo} from './attributes/volumeInfo';

export class Book {
  volumeInfo: VolumeInfo;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
