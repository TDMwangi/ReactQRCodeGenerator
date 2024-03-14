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
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="https://www.google.com"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className="border border-gray-400 rounded-l px-4 py-2 w-96"
          />
          <button
            onClick={generateQRCode}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r px-4 py-2"
          >
            Generate
          </button>
        </div>
        {qrcode && (
          <div className="flex flex-col items-center mt-4">
            <img
              src={qrcode}
              className="border border-gray-400 rounded-lg p-2"
            />
      </div>
    </div>
  );
}
