import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatButtonModule,

    MatCardModule,

    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,

    FormsModule,
  ],
  declarations: [],
  imports: [CommonModule, FormsModule],
})
export class MaterialModule {}
