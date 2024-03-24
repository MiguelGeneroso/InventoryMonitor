import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonsPageComponent } from './show-persons-page.component';

describe('ShowPersonsPageComponent', () => {
  let component: ShowPersonsPageComponent;
  let fixture: ComponentFixture<ShowPersonsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowPersonsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPersonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
