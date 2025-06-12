import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordCardComponent } from './discord.card.component';

describe('DiscordCardComponent', () => {
  let component: DiscordCardComponent;
  let fixture: ComponentFixture<DiscordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
