/* globals $ */

import EmbarkJS from 'Embark/EmbarkJS';
import MATToken from 'Embark/contracts/MATToken';
import BBLRToken from 'Embark/contracts/BBLRToken';

window.addEventListener('load', async () => {
  if (!window.ethereum && !window.web3) {
    console.log('Non-Ethereum browser detected. TODO redirect to static page to describe solution.'); return;
  }
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      // Acccounts now exposed
    } catch (err) {
      console.log(err); return;
    }
  }

  EmbarkJS.onReady(async (err) => {
    if (err) {
      // If err is not null then it means something went wrong connecting to ethereum
      // you can use this to ask the user to enable metamask for e.g
      console.log(err); return;
    }
    console.log('blockchain OK');

    // EmbarkJS.Messages.Providers.whisper.getWhisperVersion((err, _version) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   console.log('whisper OK');
    // });

    try {
      let result = await EmbarkJS.Storage.isAvailable();
      if (!result) {
        console.log('storage not available'); return;
      }
      console.log('storage OK');
    } catch (err) {
      console.log(err); return;
    }

    MATToken.methods.OPENING_RATE().call().then(function (value) {
      $('#MATToken_OPENING_RATE').text(value);
      console.log(value);
    });

    BBLRToken.methods.OPENING_RATE().call().then(function (value) {
      $('#BBLRToken_OPENING_RATE').text(value);
      console.log(value);
    });
  });
});
