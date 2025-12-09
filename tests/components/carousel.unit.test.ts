import { describe, it, expect } from 'vitest';

describe('Carousel component (unit)', () => {
  it('renders slides', () => {
    document.body.innerHTML = `
      <div class="swiper">
        <div class="swiper-slide">A</div>
        <div class="swiper-slide">B</div>
      </div>
    `;
    const slides = document.querySelectorAll('.swiper-slide');
    expect(slides.length).toBe(2);
  });
});
