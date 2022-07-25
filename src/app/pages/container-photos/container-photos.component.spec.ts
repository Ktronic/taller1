import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPhotosComponent } from './container-photos.component';

describe('ContainerPhotosComponent', () => {
  let component: ContainerPhotosComponent;
  let fixture: ComponentFixture<ContainerPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
