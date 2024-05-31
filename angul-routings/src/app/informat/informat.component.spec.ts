import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatComponent } from './informat.component';

describe('InformatComponent', () => {
  let component: InformatComponent;
  let fixture: ComponentFixture<InformatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformatComponent]
    });
    fixture = TestBed.createComponent(InformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
