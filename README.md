# ionic-barcode-scanner

<table>
  <tr>
    <td>
      <img width="256" src="https://raw.githubusercontent.com/IKTIKN/ionic-barcode-scanner/main/src/assets/logo.png" />
    </td>
    <td>
      This is a cross-platform demo app built in Ionic Framework. 
    It demonstrates the barcode scanner feature using the capacitor community plugin <a href="https://github.com/capacitor-community/barcode-scanner">barcode-scanner</a>.
    </td>
  </tr>
</table>

## Features
* Scanner
* Flashlight
* Haptic feedback
* Native camera permission
* Copy data to clipboard by tapping scanresult

## Supported protocols

This app scans more than just barcodes, see the table below for all supported protocols on Android and IOS:

<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Type</th>
      <th>Android</th>
      <th>iOS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="6">1D Product</td>
    </tr>
    <tr>
      <td>UPC_A</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>UPC_E</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>UPC_EAN_EXTENSION</td>
      <td>✔</td>
      <td>✖</td>
    </tr>
    <tr>
      <td>EAN_8</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>EAN_13</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td rowspan="8">1D Industrial</td>
    </tr>
    <tr>
      <td>CODE_39</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>CODE_39_MOD_43</td>
      <td>✖</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>CODE_93</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>CODE_128</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>CODABAR</td>
      <td>✔</td>
      <td>✖</td>
    </tr>
    <tr>
      <td>ITF</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>ITF_14</td>
      <td>✖</td>
      <td>✔</td>
    </tr>
    <tr>
      <td rowspan="8">2D</td>
    </tr>
    <tr>
      <td>AZTEC</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>DATA_MATRIX</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>MAXICODE</td>
      <td>✔</td>
      <td>✖</td>
    </tr>
    <tr>
      <td>PDF_417</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>QR_CODE</td>
      <td>✔</td>
      <td>✔</td>
    </tr>
    <tr>
      <td>RSS_14</td>
      <td>✔</td>
      <td>✖</td>
    </tr>
    <tr>
      <td>RSS_EXPANDED</td>
      <td>✔</td>
      <td>✖</td>
    </tr>
  </tbody>
</table>

## Installation

### Developers

Clone this project to your favorite directory and install the dependencies.

```bash
$ git clone https://github.com/IKTIKN/ionic-barcode-scanner.git
$ cd ionic-barcode-scanner
$ npm install
```

#### Native

The android platform has already been added to capacitor. For IOS support, add the platform to capacitor

```bash
$ npm install @capacitor/ios
$ npx cap add ios
```

Open the project in Android Studio or Xcode

```bash
$ npx cap open android
$ npx cap open ios
```

### Users
A signed [APK](https://github.com/IKTIKN/ionic-barcode-scanner/releases/download/android/barcodescanner.apk) is available for Android devices. Make sure to grant permission to install apps from untrusted sources on your device!

Or build it yourself. Open the project in Android Studio and generate a signed APK or AAP. 
```bash
Build > Generate Signed Bundle / APK 
```
