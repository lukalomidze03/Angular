import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PearentComponent } from './pearent.component';

describe('PearentComponent', () => {
  let component: PearentComponent;
  let fixture: ComponentFixture<PearentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PearentComponent]
    });
    fixture = TestBed.createComponent(PearentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
