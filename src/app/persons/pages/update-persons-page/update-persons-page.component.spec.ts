import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonsPageComponent } from './update-persons-page.component';

describe('UpdatePersonsPageComponent', () => {
  let component: UpdatePersonsPageComponent;
  let fixture: ComponentFixture<UpdatePersonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePersonsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePersonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
