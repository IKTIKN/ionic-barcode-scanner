import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonModal } from '@ionic/angular';
import { SupportedProtocolsComponent } from '../components/supported-protocols/supported-protocols.component';
import { BarcodeService } from '../services/barcode.service';
import { Clipboard } from '@capacitor/clipboard';

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
    public actionSheetButtons = [
      {
        text: 'Settings',
        icon: 'settings-outline',
        handler: () => {
            this.barcode.openAppSettings();
        },
        data: {
          action: 'share'
        }
      },
      {
        text: 'Cancel',
        icon: 'close-outline',
        cssClass: 'danger',
        role: 'cancel',
        data: {
          action: 'cancel'
        }
      }
    ];

    constructor(public barcode: BarcodeService) { }

    async copyToClipboard(content: string): Promise<void> {
        await Clipboard.write({
            string: content
        });
        this.barcode.setToast(`'${content}' copied to clipboard!`);
    }

    setModal(open: boolean): void {
        this.isModalOpen = open;
    }

    setToast(open: boolean): void {
        this.barcode.isToastOpen = open;
    }

    setActionSheet(open: boolean): void {
        this.barcode.isActionSheetOpen = open;
    }
}
