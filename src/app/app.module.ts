import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { MessageResoureService } from './common/message-resoure.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { QuoteactionsModule } from './quoteactions/quoteactions.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './core/guard/login.guard';
import { AuthGuard } from './core/guard/auth.guard';
import { UtilService } from './common/util.service';
import { SearchQuotesModule } from '@app/search-quotes/search-quotes.module';



@NgModule({
  imports: [
    // angular
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // core & shared
    CoreModule,
    SharedModule,

    // features
    // StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    DashboardModule,
    SearchQuotesModule,
    QuoteactionsModule
  ],
  declarations: [AppComponent, WelcomeComponent, LoginComponent],
  providers: [
      MessageResoureService,
      LoginGuard,
      AuthGuard,
      UtilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
