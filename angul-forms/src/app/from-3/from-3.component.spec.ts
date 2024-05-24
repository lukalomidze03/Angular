import { ComponentFixture, TestBed } from '@angular/core/testing';

import { From3Component } from './from-3.component';

describe('From3Component', () => {
  let component: From3Component;
  let fixture: ComponentFixture<From3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [From3Component]
    });
    fixture = TestBed.createComponent(From3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
