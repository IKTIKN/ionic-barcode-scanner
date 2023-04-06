import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SupportedProtocol } from 'src/app/interfaces/SupportedProtocol';
import { CheckmarkComponent } from '../checkmark/checkmark.component';

@Component({
    selector: 'app-supported-protocols',
    templateUrl: './supported-protocols.component.html',
    styleUrls: ['./supported-protocols.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, CheckmarkComponent],
})
export class SupportedProtocolsComponent implements OnInit {

    supportedProtocols: SupportedProtocol[] = [
        {
            protocol: "UPC_A",
            android: true,
            ios: true
        },
        {
            protocol: "UPC_E",
            android: true,
            ios: true
        },
        {
            protocol: "UPC_EAN_EXTENSION",
            android: true,
            ios: false
        },
        {
            protocol: "EAN_8",
            android: true,
            ios: true
        },
        {
            protocol: "EAN_13",
            android: true,
            ios: true
        },
        {
            protocol: "CODE_39",
            android: true,
            ios: true
        },
        {
            protocol: "CODE_39_MOD_43",
            android: false,
            ios: true
        },
        {
            protocol: "CODE_93",
            android: true,
            ios: true
        },
        {
            protocol: "CODE_128",
            android: true,
            ios: true
        },
        {
            protocol: "CODABAR",
            android: true,
            ios: false
        },
        {
            protocol: "ITF",
            android: true,
            ios: true
        },
        {
            protocol: "ITF_14",
            android: false,
            ios: true
        },
        {
            protocol: "AZTEC",
            android: true,
            ios: true
        },
        {
            protocol: "DATA_MATRIX",
            android: true,
            ios: true
        },
        {
            protocol: "MAXICODE",
            android: true,
            ios: false
        },
        {
            protocol: "PDF_417",
            android: true,
            ios: true
        },
        {
            protocol: "QR_CODE",
            android: true,
            ios: true
        },
        {
            protocol: "RSS_14",
            android: true,
            ios: false
        },
        {
            protocol: "RSS_EXPANDED",
            android: true,
            ios: false
        }
    ];

    constructor() { }

    ngOnInit() { }

}
