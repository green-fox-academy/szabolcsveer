'use strict';

import { Thing } from './things';

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(...thing): void {
    thing.forEach(value => this.things.push(value));
    // this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }
}

export { Fleet };