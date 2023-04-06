import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonModal } from '@ionic/angular';
import { SupportedProtocolsComponent } from '../components/supported-protocols/supported-protocols.component';
import { BarcodeService } from '../services/barcode.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, SupportedProtocolsComponent],
})
export class HomePage {
    @ViewChild(IonModal) modal!: IonModal;

    isModalOpen: boolean = false;

    constructor(public barcode: BarcodeService) { }

    setModal(open: boolean): void {
        this.isModalOpen = open;
    }

    setToast(open: boolean): void {
        this.barcode.isToastOpen = open;
    }
}
