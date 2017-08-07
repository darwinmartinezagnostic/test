'use strict';

const express = require('express')

const app = express()

app.listen(3000,() => {
	console.log('APP corriendo en localhost:3000')
})
/*
'use strict';

import HitBTC from 'hitbtc-api';
 */

const app2 = require('hitbtc-api');

//const HitBTC = app2()

const key = 'xxxxxx';
const secret = 'xxxxxx';
const restClient = new app2.default({ key,secret, isDemo: false });
const websocketClient = new app2.default.WebsocketClient({ key, secret, isDemo: false });

var xy = restClient.getMyOrder();
 
// The methods are bound properly, so feel free to destructure them: 
const { getMyBalance } = restClient;
getMyBalance()
  .then(({ balance }) => console.log(
    `My USD balance is ${balance.USD.cash}!`
  ))


 getMyBalance()
  .then(({ order }) => console.log(
    `My order is ${order}!`
  ))

  for(var x=0; x<100;x++){
  	console.log(x+1)
  }


  console.log('\n'+xy);
