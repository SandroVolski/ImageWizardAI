import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-function',
  templateUrl: './function.page.html',
  styleUrls: ['./function.page.scss'],
})
export class FunctionPage {

  constructor(private router: Router) {
    document.body.classList.add('dark-mode');
   }
   public darkModeEnabled = true;

  ngOnInit() {
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
}
