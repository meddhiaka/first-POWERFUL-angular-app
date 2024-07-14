import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondtionalcomponentrenderComponent } from './condtionalcomponentrender.component';

describe('CondtionalcomponentrenderComponent', () => {
  let component: CondtionalcomponentrenderComponent;
  let fixture: ComponentFixture<CondtionalcomponentrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondtionalcomponentrenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondtionalcomponentrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
