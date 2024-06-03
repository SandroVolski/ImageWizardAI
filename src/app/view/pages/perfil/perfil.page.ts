import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage {
  selectedTheme: string = 'dark';
  
  public darkModeEnabled = true;
  constructor(private router: Router) {
    document.body.classList.add('dark-mode');
  }


  saveSettings() {
    // Implemente a lógica para salvar as configurações aqui
    console.log('Settings saved');
  }

  logout() {
    // Implemente a lógica para deslogar aqui
    this.router.navigateByUrl('/home'); // Redireciona para a tela de home
    console.log('User logged out');
  }
  
  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
  public selectedLanguage: string = "Português do Brasil";
  updateLanguage() {
    console.log("Idioma selecionado:", this.selectedLanguage);
    // Aqui você pode adicionar qualquer outra lógica que precise ser executada quando o idioma mudar
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