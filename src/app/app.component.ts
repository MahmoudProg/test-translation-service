import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
