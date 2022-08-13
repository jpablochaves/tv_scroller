import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdImagesComponent } from './ad-images.component';

describe('AdImagesComponent', () => {
  let component: AdImagesComponent;
  let fixture: ComponentFixture<AdImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
