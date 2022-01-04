import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailpasswdresetsendComponent } from './emailpasswdresetsend.component';

describe('EmailpasswdresetsendComponent', () => {
  let component: EmailpasswdresetsendComponent;
  let fixture: ComponentFixture<EmailpasswdresetsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailpasswdresetsendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailpasswdresetsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
