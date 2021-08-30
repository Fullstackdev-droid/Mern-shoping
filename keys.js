module.exports = {

  // / live

 mongoURI: "mongodb://localhost:27017/bitbaazi",
  // mongoURI: "mongodb://users:J8kbt478uk6@3.23.160.205:20475/exchange",
 // mongoURI: "mongodb://jpusers:K8kbt478cj7@108.160.130.202:20746/japdb",

  // mongoURI: "mongodb://bitbaaziUser:BiT6Aa219aA5w03d@159.89.167.68:27017/bitbaazi",

  secretOrKey: "BityRC2W5jfnWUtYpbD",
  // priceapikey:"36154ca1fa4bb6b518865244b8488a3694a844d1bdaa38404174da1f2a19bb75",
  priceapikey: "c18f149e3b79821c3493d579301a50ac34ac7c5e5d4533c2a4c3eb226b23827f",

  // baseUrl: "http://45.32.44.27:2053/",
  baseUrl:"http://localhost:2053",
 // baseUrl: "https://api.bitbaazi.com:2053",
  siteName: "Bitbaazi",
   frontUrl : "http://localhost:3000/",
   frontendUrl:"http://localhost:3000/",
 // frontUrl:"https://lokalcoin.com/",
  // frontUrl: "http://198.13.38.16/",
  // frontendUrl: "http://198.13.38.16/",
  // frontUrl: "https://bitbaazi.com/",
  // frontendUrl: "https://bitbaazi.com/",

  //frontendUrl:"https://lokalcoin.com/",
  // frontendUrl : "http://localhost:3000/",

  // fromemail  : "lokalcoin123@gmail.com",
  // email      : "lokalcoin123@gmail.com",
  // password   : "Prabhu@51002",
  // host       :  "smtp.gmail.com",
  // port       :  "465",


  // fromemail: "support@bitbaazi.com",
  // email: "support@tekitoni.com",
  // password: "Supo@#20&*0@$201",
  // host: "security.akaihost.com",
  // port: "465",


  fromemail: "helloomneety@gmail.com",
  email: "helloomneety@gmail.com",
  password: "Omneety@1234000",
  host: "smtp.gmail.com",
  port: "587",
  //twili account  --- noreply@lokalcoin.com
  // twioio pass --- Noreply@123Noreply@123


  cryptoPass: "InktBitjfnWUtYpbD",
  fromName: "bitbaazi",
  serverName: "Gmail",
  infura: "https://ropsten.infura.io/v3/0701ef37d3a84e30ae807fc0c0f697c1",

  TWILIO_ACCOUT_SID: 'ACa33794a0b4f86a7524a8bbe737b180d3',
  TWILIO_AUTH_TOKEN: 'd100644728cf5ee8ef71680863983c81',
  TWILIO_PHONE_NUMBER: "+12053016516",
  EMAILAPIKEY: "",
  EMAILSECRETKEY: "",
  //ripple
  // ripplehost:'wss://s.altnet.rippletest.net:51233',
  ripplehost: 'wss://s1.ripple.com',
  // rippleaddress:'rP7oi1VtWdapSS3fURURaT6G9rijQuGKr5',
  rippleaddress: 'rJg8CZHdu8gJaVeb9rGtm2coirddd7by3d',
  ripplesecret: 'U2FsdGVkX1+o52RN4WFjZeiqNfZSHs+QCKJWzCff/qLotTw+0ytCjWhWv/aLA8J7', // encrypt key
  rippleSecretKey: "test",

  ethaddress: "0xd718ED1c8e4CB62b5ece5D9823011a85dBB06fA2",
  ethkey: " ",
  ethurl: 'http://45.32.44.27:2053',
  ethereum: {
    etherScanType: 'ropsten',// api
    etherScanUrl: "https://##ETHERSCANTYPE##.etherscan.io/api?",
    apikey: 'RH35J5B9BNQXY9K6DIWU8KTGRJ7BI6SZEH',
    module: 'proxy',
    action: 'eth_getBlockByNumber', //eth_blockNumber
    tag: '',
    boolean: true
  },

  cryptoCompare: {
    key1: "a57678bc21ce5fdbbd407a5d8ba43f603b2211643df662012ce144a1913923bb",
    key2: "0fa337d0fbc7b54f5a303c64a830cd97be27a3cce6c684383ea9c04524715f2b",
    key3: "527215ae1d67f273ec2feeff32d9e375d3620ff7e1192220ba6110825ded1383"
  },
  coinPayment: {
    key: "3057ddee88d048e6a387732165f8a731bae072bd94bea2bc16fdf4408af8c9a1",
    secret: "c389473ac974f22645179Ca56EcE9cffc73bf386E851afec62a65A6F87577cA4",
  },
  binance: {
    apiKey1: {
      apiKey: 'wN82UKWtB3e8acVR48cmTzkwM6JGXnJXfpf3hUEh0JTLrtFNS8LaOZ4qYP6AlQX0',
      apiSecret: 'RVdn5ZvIAtfHAALJkIMtBn3HcWtVUxVqzFuWsUTQh12Wliql6Fb0IAM4yCvKWQdW',
    },
    apiKey2: {
      key: 'PIyLADNuHFrwT7EE75lsl3ps2ZDs5sGjgMDFx7ylGAdNjOnmoWBVzAB1dHrBP93P', // Get this from your account on binance.com
      secret: 'CvvHdeAJNSe6AHbKbAgiDnmINe8mZwWVviH9HvlZK1SSpyokAf5ubFGakcFqzqtH', // Same for this
      timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
      recvWindow: 10000, // Optional, defaults to 5000, increase if you're getting timestamp errors
      disableBeautification: false,
      handleDrift: false,
      baseUrl: 'https://api.binance.com/',
      requestOptions: {}
    },
    websocket: {
      "socketUrl": "wss://dex.binance.org/api/ws/",
      "key": "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23"
    }
  }
};



