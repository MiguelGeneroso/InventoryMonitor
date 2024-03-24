import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonsPageComponent } from './create-persons-page.component';

describe('CreatePersonsPageComponent', () => {
  let component: CreatePersonsPageComponent;
  let fixture: ComponentFixture<CreatePersonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePersonsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePersonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
