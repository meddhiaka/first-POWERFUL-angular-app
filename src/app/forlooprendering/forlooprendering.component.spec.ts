import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForlooprenderingComponent } from './forlooprendering.component';

describe('ForlooprenderingComponent', () => {
  let component: ForlooprenderingComponent;
  let fixture: ComponentFixture<ForlooprenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForlooprenderingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForlooprenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
