import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent} from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    UserEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  entryComponents: [AppComponent, UserListComponent, UserEditorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
