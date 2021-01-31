import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSceneComponent } from './planet-scene.component';

describe('PlanetSceneComponent', () => {
  let component: PlanetSceneComponent;
  let fixture: ComponentFixture<PlanetSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
