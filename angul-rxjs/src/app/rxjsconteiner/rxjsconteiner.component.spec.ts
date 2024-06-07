import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsconteinerComponent } from './rxjsconteiner.component';

describe('RxjsconteinerComponent', () => {
  let component: RxjsconteinerComponent;
  let fixture: ComponentFixture<RxjsconteinerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsconteinerComponent]
    });
    fixture = TestBed.createComponent(RxjsconteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
