import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportcontactbuttonComponent } from './importcontactbutton.component';

describe('ImportcontactbuttonComponent', () => {
  let component: ImportcontactbuttonComponent;
  let fixture: ComponentFixture<ImportcontactbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportcontactbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportcontactbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
