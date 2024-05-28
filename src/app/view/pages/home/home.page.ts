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
  sliderActive = false;
  sliderPosition = 0;
  
  userName = 'Sandro Eduardo Prado Volski';
  userEmail = 'sandroeduvolski@gmail.com';

  constructor(private router: Router) {
    document.body.classList.add('dark-mode');
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  ngAfterViewInit() {
    this.setupSlider();
  }

  toggleSliderVisibility() {
    this.sliderActive = !this.sliderActive;
    this.sliderPosition = this.sliderContainer.nativeElement.offsetWidth;
  }

  setupSlider() {
    const slider = this.slider.nativeElement;
    const sliderContainer = this.sliderContainer.nativeElement;

    // Event listeners for mouse and touch actions
    slider.addEventListener('mousedown', (event: MouseEvent) => {
      event.preventDefault();
      this.startDragging(event.clientX);
    });

    slider.addEventListener('touchstart', (event: TouchEvent) => {
      event.preventDefault();
      const touch = event.touches[0];
      this.startDragging(touch.clientX);
    });
  }

  startDragging(startX: number) {
    const onMouseMove = (event: MouseEvent) => {
      const currentX = event.clientX;
      this.updateSliderPosition(currentX - startX);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  updateSliderPosition(deltaX: number) {
    this.sliderPosition += deltaX;
    if (this.sliderPosition < 0) this.sliderPosition = 0;
    if (this.sliderPosition > this.sliderContainer.nativeElement.offsetWidth) {
      this.sliderPosition = this.sliderContainer.nativeElement.offsetWidth;
    }
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
