import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLazyBComponent } from './mod-lazy-b.component';

describe('ModLazyBComponent', () => {
  let component: ModLazyBComponent;
  let fixture: ComponentFixture<ModLazyBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLazyBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModLazyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
