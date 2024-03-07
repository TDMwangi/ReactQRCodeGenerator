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
    });
  };
}