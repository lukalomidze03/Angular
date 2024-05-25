import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAnguComponent } from './forms-angu.component';

describe('FormsAnguComponent', () => {
  let component: FormsAnguComponent;
  let fixture: ComponentFixture<FormsAnguComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsAnguComponent]
    });
    fixture = TestBed.createComponent(FormsAnguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
