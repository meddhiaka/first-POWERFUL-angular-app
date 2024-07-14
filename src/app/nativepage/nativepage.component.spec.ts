import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativepageComponent } from './nativepage.component';

describe('NativepageComponent', () => {
  let component: NativepageComponent;
  let fixture: ComponentFixture<NativepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NativepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NativepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
