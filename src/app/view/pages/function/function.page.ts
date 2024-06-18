import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-function',
  templateUrl: './function.page.html',
  styleUrls: ['./function.page.scss'],
})
export class FunctionPage implements OnInit {
  public darkModeEnabled = true;
  public selectedLanguage: string = "Português do Brasil";

  constructor(private router: Router, private translate: TranslateService) {
    document.body.classList.add('dark-mode');
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'Português do Brasil';
    this.translate.use(this.selectedLanguage === "English (US)" ? 'en' : 'pt');
  }

  ngOnInit() {}

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }

  updateLanguage() {
    console.log("Idioma selecionado:", this.selectedLanguage);
    const languageCode = this.selectedLanguage === "English (US)" ? 'en' : 'pt';
    this.translate.use(languageCode);
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode', this.darkModeEnabled);
  }
}
