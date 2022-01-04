import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontactbuttonComponent } from './createcontactbutton.component';

describe('CreatecontactbuttonComponent', () => {
  let component: CreatecontactbuttonComponent;
  let fixture: ComponentFixture<CreatecontactbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecontactbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecontactbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
