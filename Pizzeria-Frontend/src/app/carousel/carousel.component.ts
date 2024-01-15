import { Component} from '@angular/core';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent{
  let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Create pagination dots
const pagination = document.getElementById('pagination');
for (let i = 0; i < totalItems; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToItem(i));
  pagination.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function updateCarousel() {
  const carousel = document.getElementById('carousel');
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function goToItem(index: number) {
  currentIndex = index;
  updateCarousel();
  updateDots();
}

function nextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
  updateDots();
}

function prevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
  updateDots();
}

document.getElementById('nextBtn').addEventListener('click', nextItem);
document.getElementById('prevBtn').addEventListener('click', prevItem);

// Initial setup
updateCarousel();
updateDots();

  
}
