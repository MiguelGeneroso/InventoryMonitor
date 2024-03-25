import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemsPageComponent } from './update-items-page.component';

describe('UpdateItemsPageComponent', () => {
  let component: UpdateItemsPageComponent;
  let fixture: ComponentFixture<UpdateItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateItemsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
