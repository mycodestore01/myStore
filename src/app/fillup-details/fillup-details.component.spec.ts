import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillupDetailsComponent } from './fillup-details.component';

describe('FillupDetailsComponent', () => {
  let component: FillupDetailsComponent;
  let fixture: ComponentFixture<FillupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillupDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
