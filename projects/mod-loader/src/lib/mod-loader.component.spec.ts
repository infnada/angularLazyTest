import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLoaderComponent } from './mod-loader.component';

describe('ModLoaderComponent', () => {
  let component: ModLoaderComponent;
  let fixture: ComponentFixture<ModLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
