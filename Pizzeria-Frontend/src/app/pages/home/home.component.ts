import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isOpen: boolean = false;

  openPopup() {
    var popup = document.getElementById('popup');
  
    if (popup !== null) {
      popup.classList.add('blur');
      popup.style.display = 'flex';
      this.isOpen = true;
    }
  }
  
  closePopup() {
    var popup = document.getElementById('popup');
  
    if (popup !== null) {
      popup.classList.remove('blur');
      popup.style.display = 'none';
      this.isOpen = false;
    }
  }
  
}
