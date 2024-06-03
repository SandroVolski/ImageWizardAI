import { Component, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('afterImage') afterImage!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  darkModeEnabled = true;
  sliderActive = false;
  sliderPosition = 250;
  
  userName = 'Sandro Eduardo Prado Volski';
  userEmail = 'sandroeduvolski@gmail.com';
  selectedLanguage: string = "Português do Brasil";

  constructor(private router: Router) {}

  ngOnInit() {
    document.body.classList.add('dark-mode');
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  updateLanguage() {
    console.log("Idioma selecionado:", this.selectedLanguage);
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode', this.darkModeEnabled);
  }

  activateSlider(event: MouseEvent): void {
    this.sliderActive = true;
    this.moveSlider(event);
  }

  moveSlider(event: MouseEvent): void {
    if (!this.sliderActive) {
      return;
    }
    const containerRect = this.container.nativeElement.getBoundingClientRect();
    const pos = event.clientX - containerRect.left;

    // Garantir que o slider não saia dos limites da imagem
    if (pos >= 0 && pos <= containerRect.width) {
      this.sliderPosition = pos;
    }
  }

  deactivateSlider(): void {
    this.sliderActive = false;
  }
}
