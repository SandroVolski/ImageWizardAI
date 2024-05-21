import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('imageTop') imageTop!: ElementRef<HTMLImageElement>;
  public darkModeEnabled = true;
  constructor(private router: Router) {
    document.body.classList.add('dark-mode');
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  ngAfterViewInit() {
    console.log(this.slider.nativeElement);
    console.log(this.imageTop.nativeElement);
    console.log(this.sliderContainer.nativeElement);
    this.setupSlider();
  }

  setupSlider() {
    console.log("Setting up slider...");
    
    const slider = this.slider.nativeElement;
    const imageTop = this.imageTop.nativeElement;
    const sliderContainer = this.sliderContainer.nativeElement;

    console.log("Slider:", slider);
    console.log("Image Top:", imageTop);
    console.log("Slider Container:", sliderContainer);

    // Event listeners for mouse actions
    slider.addEventListener('mousedown', (event: MouseEvent) => {
      const startX = event.clientX;
      const startWidth = imageTop.clientWidth;

      const onMouseMove = (event: MouseEvent) => {
        const currentX = event.clientX;
        const newWidth = startWidth + (currentX - startX);
        console.log("New Width:", newWidth)
        if (newWidth >= 0 && newWidth <= sliderContainer.clientWidth) {
          slider.style.left = `${newWidth}px`;
          imageTop.style.width = `${newWidth}px`;
        }
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    // Add touch event listeners similar to mouse events if necessary
    slider.addEventListener('touchstart', (event: TouchEvent) => {
      const touch = event.touches[0];
      const startX = touch.clientX;
      const startWidth = imageTop.clientWidth;

      const onTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0];
        const currentX = touch.clientX;
        const newWidth = startWidth + (currentX - startX);
        if (newWidth >= 0 && newWidth <= sliderContainer.clientWidth) {
          slider.style.left = `${newWidth}px`;
          imageTop.style.width = `${newWidth}px`;
        }
        event.preventDefault(); // Prevent scrolling when touching
      };

      const onTouchEnd = () => {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
      };

      document.addEventListener('touchmove', onTouchMove, { passive: false });
      document.addEventListener('touchend', onTouchEnd);
    });
  }

  public selectedLanguage: string = "Português do Brasil";
  updateLanguage() {
    console.log("Idioma selecionado:", this.selectedLanguage);
    // Aqui você pode adicionar qualquer outra lógica que precise ser executada quando o idioma mudar
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode', this.darkModeEnabled);
  }
}
