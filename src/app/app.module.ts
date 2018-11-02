import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {UserService} from './shared/services/user.service';
import {AuthService} from './shared/services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {SystemModule} from './system/system.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AuthModule,
        HttpClientModule,
        AppRoutingModule,
        SystemModule,
        BrowserAnimationsModule,
    ],
    providers: [UserService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
