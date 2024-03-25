import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemsPageComponent } from './create-items-page.component';

describe('CreateItemsPageComponent', () => {
  let component: CreateItemsPageComponent;
  let fixture: ComponentFixture<CreateItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateItemsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
