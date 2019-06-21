import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTileItemComponent } from './weather-tile-item.component';

describe('WeatherTileItemComponent', () => {
  let component: WeatherTileItemComponent;
  let fixture: ComponentFixture<WeatherTileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTileItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
