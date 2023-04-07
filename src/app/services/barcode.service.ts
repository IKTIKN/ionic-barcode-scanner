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
    
    isActionSheetOpen = false;
    actionSheetMessage!: string;

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
            const space = index == 0 ? "" : " "; 
            platformMessage = platformMessage.concat(space.concat(platform));
        });
        this.setToast(`This feature is not available on '${platformMessage}'.`);
    }

    private resetStates(): void {
        this.isScanning = false;
        this.torchState = false;
    }

    setToast(message: string): void {
        this.toastMessage = message;
        this.isToastOpen = true;
    }

    async startScan(): Promise<void> {
        if (this.platform.is("android")) {
            const permission = await BarcodeScanner.checkPermission({ force: true });
            if (permission.granted) {
                BarcodeScanner.hideBackground();
                document.querySelector('body')?.classList.add('scanner-active');
    
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
                this.actionSheetMessage = "Please grant access to your camera before using this feature.";
                this.isActionSheetOpen = true;
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

    async openAppSettings(): Promise<void> {
        if (this.platform.is("android")) {
            await BarcodeScanner.openAppSettings();
        }
    }

}