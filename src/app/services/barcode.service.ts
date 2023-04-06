import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Haptics } from '@capacitor/haptics';
import { Platform } from '@ionic/angular';
import { ScanResult } from '../interfaces/ScanResult';

@Injectable({
    providedIn: 'root'
})
export class BarcodeService {
    isToastOpen: boolean = false;
    toastMessage!: string;
    isScanning: boolean = false;
    torchState: boolean = false;
    scanResult: ScanResult[] = [];

    constructor(public platform: Platform) {
        if (platform.is("android")) {
            BarcodeScanner.prepare();
        }
    }

    private handleUnsupportedPlatform(): void {
        const platforms = this.platform.platforms();
        let platformMessage = "";
        platforms.forEach((platform, index) => {
            console.log(index)
            const space = index == 0 ? "" : " "; 
            platformMessage = platformMessage.concat(space.concat(platform));
        });
        this.toastMessage = `This feature is not available on '${platformMessage}'.`;
        this.isToastOpen = true;
    }

    private resetStates(): void {
        this.isScanning = false;
        this.torchState = false;
    }

    async startScan(): Promise<void> {
        if (this.platform.is("android")) {
            await BarcodeScanner.checkPermission({ force: true });
            BarcodeScanner.hideBackground();
            document.querySelector('body')?.classList.add('scanner-active');
            document.querySelector('ion-toolbar')?.classList.add('transparant-toolbar');

            this.isScanning = true;
            const result = await BarcodeScanner.startScan();
            if (result.hasContent) {
                await Haptics.vibrate();
                document.querySelector('body')?.classList.remove('scanner-active');
                this.scanResult.push({
                    timestamp: new Date().toString(),
                    protocol: result.format,
                    content: result.content
                });
                this.resetStates();
                BarcodeScanner.prepare();
            }
        } else {
            this.handleUnsupportedPlatform();
        }
    };

    async stopScan(): Promise<void> {
        if (this.platform.is("android")) {
            await BarcodeScanner.stopScan();
            document.querySelector('body')?.classList.remove('scanner-active');
            this.resetStates();
            BarcodeScanner.prepare();
        }
    }

    async toggleTorch(): Promise<void> {
        if (this.platform.is("android")) {
            await BarcodeScanner.toggleTorch();
            this.torchState = !this.torchState;
        }
    }

}