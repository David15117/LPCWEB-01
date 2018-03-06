import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
        disciplinas = [
        'Língua Portuguesa',
        'Arte',
        'Educação Física',
        'Matemática',
        'História',
        'Geografia',
        'Ciências',
        'Redação',
        'Língua Estrangeira Moderna - Inglês',
        'Ensino Religioso'
    ];

}
