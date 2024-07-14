import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatexComponent } from './statex.component';

describe('StatexComponent', () => {
  let component: StatexComponent;
  let fixture: ComponentFixture<StatexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
