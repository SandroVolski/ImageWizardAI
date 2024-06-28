import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {
  enhancedImages = [
    { src: './assets/imgs/tests/paul_00.png' },
    { src: './assets/imgs/tests/the-beatles_00.png' },
    { src: './assets/imgs/tests/the-beatles_01.png' },
    { src: './assets/imgs/tests/the-beatles_03.png' },
    { src: './assets/imgs/tests/walter (2)_00.png' },
    { src: './assets/imgs/tests/paul_00.png' },
    { src: './assets/imgs/tests/the-beatles_00.png' },
    { src: './assets/imgs/tests/the-beatles_01.png' },
    { src: './assets/imgs/tests/the-beatles_03.png' },
  ];

  uploadedImages = [
    { src: './assets/imgs/tests/paulori.png' },
    { src: './assets/imgs/tests/the-beatlesori.png' },
    { src: './assets/imgs/tests/walterori.png' },
    { src: './assets/imgs/tests/paulori.png' },
    { src: './assets/imgs/tests/the-beatlesori.png' },
    { src: './assets/imgs/tests/walterori.png' },
  ];

  public darkModeEnabled = true;
  public selectedLanguage: string = "Português do Brasil";

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('pt');
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
      this.translate.use(savedLanguage);
    } else {
      this.translate.use('pt');
    }
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  updateLanguage() {
    const lang = this.selectedLanguage;
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode', this.darkModeEnabled);
  }

  public enhancedLimit = 6;  // Começa mostrando 6 imagens
  public uploadedLimit = 3;  // Começa mostrando 3 imagens

  showDotse = true;
  showDotsu = true; // Controle inicialmente true para mostrar os pontos

  showMoreEnhancedImages() {
    this.enhancedLimit = this.enhancedImages.length;
    this.showDotse = false; // Esconde os pontos após clicar
  }

  showMoreUploadedImages() {
    this.uploadedLimit = this.uploadedImages.length;
    this.showDotsu = false; // Esconde os pontos após clicar
  }

  toggleMoreEnhancedImages() {
    this.showDotse = !this.showDotse; // Alterna a visibilidade do opaco
    this.enhancedLimit = this.showDotse ? this.enhancedImages.length : 6; // Ajusta o limite baseado na visibilidade
  }

  toggleMoreUploadedImages() {
    this.showDotsu = !this.showDotsu; // Alterna a visibilidade do opaco
    this.uploadedLimit = this.showDotsu ? this.uploadedImages.length : 3; // Ajusta o limite baseado na visibilidade
  }
}
