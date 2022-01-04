import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpswwdComponent } from './forgotpswwd.component';

describe('ForgotpswwdComponent', () => {
  let component: ForgotpswwdComponent;
  let fixture: ComponentFixture<ForgotpswwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpswwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpswwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
