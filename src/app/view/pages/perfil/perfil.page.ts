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
    document.body.classList.add('dark-mode');
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
    this.translate.use(this.selectedLanguage);
  }

  ngOnInit() {}

  saveSettings() {
    console.log('Settings saved');
  }

  logout() {
    this.router.navigateByUrl('/home'); // Redireciona para a tela de home
    console.log('User logged out');
  }
  
  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  updateLanguage() {
    console.log("Idioma selecionado:", this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
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
