import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatButtonModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule
    ]
})
export class MaterialModule {}