'use strict';

import { Animal } from './zoo'

interface Flyable {
  land;
  fly;
  takeOff;
}

abstract class Vehicle {
  engineOn;
  kmPerDay;
  speed;
}

class Helicopter extends Vehicle implements Flyable{
  land;
  fly;
  takeOff;
}

class Bird extends Animal implements Flyable{
  land;
  fly;
  takeOff;
}
