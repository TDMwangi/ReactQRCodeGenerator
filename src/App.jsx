import QRCode from 'qrcode';
import { useState } from 'react';

import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const generateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) {
        return console.error(err);
      }

      setQrcode(url);
    });
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = qrcode;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">QR Code Generator</h1>
      <div className="flex flex-col items-center"></div>
    </div>
  );
}
