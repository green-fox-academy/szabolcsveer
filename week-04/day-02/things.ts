'use strict';

import { Comparable } from "./comparable";

class Thing implements Comparable{
  compareTo(other: Thing): number
{
  if(this.name < other.name){
    return -1
  }else if(this === other){
    return 0
  }else{
    return 1 
  }
}
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.completed;
  }
}

export { Thing };