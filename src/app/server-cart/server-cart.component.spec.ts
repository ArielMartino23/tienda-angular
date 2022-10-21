import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCartComponent } from './server-cart.component';

describe('ServerCartComponent', () => {
  let component: ServerCartComponent;
  let fixture: ComponentFixture<ServerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
