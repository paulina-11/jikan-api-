import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAnimesComponent } from './cards-animes.component';

describe('CardsAnimesComponent', () => {
  let component: CardsAnimesComponent;
  let fixture: ComponentFixture<CardsAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
