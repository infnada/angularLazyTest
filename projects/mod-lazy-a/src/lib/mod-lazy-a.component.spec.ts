import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLazyAComponent } from './mod-lazy-a.component';

describe('ModLazyAComponent', () => {
  let component: ModLazyAComponent;
  let fixture: ComponentFixture<ModLazyAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLazyAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModLazyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
