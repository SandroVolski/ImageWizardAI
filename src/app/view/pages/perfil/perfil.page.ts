import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  selectedTheme: string = 'dark';
  selectedLanguage: string = 'pt';

  public darkModeEnabled = true;
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
  

  ngOnInit() {}

  saveSettings() {
    console.log('Settings saved');
  }

  logout() {
    this.router.navigateByUrl('/signin'); 
    console.log('User logged out');
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

  userPassword: string = 'senhaInicial';
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const inputEl = document.querySelector('ion-input[type="password"]') as HTMLInputElement; // Ajuste aqui
    if (inputEl) {
      inputEl.type = this.passwordVisible ? 'text' : 'password';
    }
  }
}
