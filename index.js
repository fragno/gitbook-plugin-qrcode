'use strict';

const QRCode = require('qrcode');
const width = 200;
const logoWidth = width / 3;

module.exports = {
  book: {
    assets: './assets',
    js: [],
  },
  blocks: {
    qrcode: {
      process: function(block) {
        return QRCode.toDataURL(block.body, { width, version: 6 })
        .then( url => {
          return `
            <div style="width: ${width}px; height: ${width}px">
              <img src=${url} style="width: ${width}px" />
              <img src=${block.kwargs.logosrc} style="width: ${logoWidth}px; position: relative; top: -${width/2 + logoWidth/2 }px; left: ${width/2 - logoWidth/2}px"/>
            </div>
          `
        });
      }
    }
  }
}
