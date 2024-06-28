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
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
      this.translate.use(savedLanguage);
    } else {
      this.translate.use('pt');
    }
  }

  ngOnInit() {}

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
}
