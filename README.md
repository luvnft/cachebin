# Project Overview

The site is hosted on [cachebin.vercel.app](https://cachebin.vercel.app/).
<br />
This project is a text sharing application built using IPFS protocol. This project saves users inputs to IPFS and generates a unique paste hash for them to share. User inputs can be encrypted so that only people who know the hash and the password could retrieve the input. This project is built using web3.storage.
<br />
A user can upload or write a text document in the textfield area. 



There is also a password protection feature in the application. Once the upload is finished, a hash is generated using SHA-256 algorithm and is stored in web3.storage. CryptoJS is stored to convert the data into cypher text.
In the other section, user has to enter the hash to access the text. 
