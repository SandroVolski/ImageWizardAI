import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('afterImage') afterImage!: ElementRef;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  private isDragging = false;
  darkModeEnabled = true;
  sliderPosition = 50; // Porcentagem inicial da posição do slider

  userName = 'Sandro Eduardo Prado Volski';
  userEmail = 'sandroeduvolski@gmail.com';
  selectedLanguage: string = "Português do Brasil";

  selectedFile: File | null = null;
  selectedImageUrl: string | null = null;
  restoredImageUrl: string | null = null;
  isLoading = false;

  // Atualize com o URL público do ngrok
  restorationApiUrl = 'https://43b8-35-185-199-242.ngrok-free.app/restore';

  buttonTextKey = 'BUTTON_RESTORE';
  buttonClass = 'restore-button';

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

  ngOnInit() {
    document.body.classList.add('dark-mode');
  }

  ngAfterViewInit() {
    this.updateSliderPosition(this.container.nativeElement.offsetWidth / 2);
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

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }
    this.moveSlider(event);
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  startDragging(event: MouseEvent): void {
    this.isDragging = true;
    this.moveSlider(event);
  }

  private moveSlider(event: MouseEvent): void {
    const containerRect = this.container.nativeElement.getBoundingClientRect();
    let position = event.clientX - containerRect.left;
    if (position < 0) {
      position = 0;
    } else if (position > containerRect.width) {
      position = containerRect.width;
    }
    this.updateSliderPosition(position);
  }

  private updateSliderPosition(position: number): void {
    const widthPercent = (position / this.container.nativeElement.offsetWidth) * 100;
    this.slider.nativeElement.style.left = `${widthPercent}%`;
    this.afterImage.nativeElement.style.clipPath = `inset(0 ${100 - widthPercent}% 0 0)`;
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
      console.log(`File selected: ${this.selectedFile.name}`);
      this.buttonTextKey = 'BUTTON_RESTORE';
      this.buttonClass = 'restore-button';
      this.restoredImageUrl = null;
    } else {
      console.error('No file selected');
    }
  }

  async uploadImage() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.isLoading = true;
    this.restoredImageUrl = null;

    try {
      const response = await axios.post(this.restorationApiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'blob' // Para receber a imagem como um blob
      });

      // Exibir a imagem restaurada no navegador
      const blob = new Blob([response.data], { type: 'image/png' });
      this.restoredImageUrl = URL.createObjectURL(blob);
      console.log('Image restored successfully', this.restoredImageUrl);

      // Atualizar o texto e a classe do botão
      this.buttonTextKey = 'BUTTON_SELECT_ANOTHER';
      this.buttonClass = 'select-button';
    } catch (error) {
      console.error('Error restoring image:', error);
    } finally {
      this.isLoading = false;
    }
  }

  onRestoreButtonClick() {
    if (this.restoredImageUrl) {
      // Se a imagem restaurada estiver disponível, o botão deve permitir a seleção de uma nova imagem
      this.triggerFileInput();
    } else {
      // Caso contrário, deve fazer o upload da imagem
      this.uploadImage();
    }
  }

  downloadImage() {
    if (this.restoredImageUrl) {
      const link = document.createElement('a');
      link.href = this.restoredImageUrl;
      link.download = 'restored_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
