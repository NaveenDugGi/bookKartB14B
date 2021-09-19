import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarItemComponent } from './similar-item.component';

describe('SimilarItemComponent', () => {
  let component: SimilarItemComponent;
  let fixture: ComponentFixture<SimilarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
