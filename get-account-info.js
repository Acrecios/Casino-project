'use strict';
const CasinocoinAPI = require('casinocoin-libjs').CasinocoinAPI;

const api = new CasinocoinAPI({
  server: 'wss://ws01.casinocoin.org:4443' // Public casniocoind server
});
api.connect().then(() => {
  /* begin custom code ------------------------------------ */
  const myAddress = 'cDarPNJEpCnpBZSfmcquydockkePkjPGA2';