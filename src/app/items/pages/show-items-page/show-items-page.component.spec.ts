import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItemsPageComponent } from './show-items-page.component';

describe('ShowItemsPageComponent', () => {
  let component: ShowItemsPageComponent;
  let fixture: ComponentFixture<ShowItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowItemsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
