import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiItemComponent } from './swapi-item.component';

describe('SwapiItemComponent', () => {
  let component: SwapiItemComponent;
  let fixture: ComponentFixture<SwapiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapiItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
