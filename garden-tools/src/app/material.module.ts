import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class MaterialModule {}