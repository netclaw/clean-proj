import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneRegistrationComponent } from './done-registration.component';

describe('DoneRegistrationComponent', () => {
  let component: DoneRegistrationComponent;
  let fixture: ComponentFixture<DoneRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
