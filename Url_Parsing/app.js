import url from 'url';
import path from 'path';

const myUrl =  new URL('https://asima:dormant@developer.mozilla.org/en-US/docs/Web/API/URL/ /search?activity=camping&cost=32000&duration=2+month#Examples');

//displaying url
console.log(myUrl);

// finding href
console.log(`The href of the given url is ${myUrl.href}`);

//finding origin
console.log(`The origin of the given url is ${myUrl.origin}`);

//finding protocol
console.log(`The protocol of the given url is : ${myUrl.protocol}`);

//finding username
console.log(`Username in the  given url is : ${myUrl.username}`);

//finding password
console.log(`Password in given url is : ${myUrl.password}`);

//finding hostname
console.log(`Hostname in given url is : ${myUrl.hostname}`);

//finding port
console.log(`Port in given url is : ${myUrl.port}`);//no port displayed as url doesnot contain any local host or specific port.

//finding pathname
console.log(`Pathname in given url is : ${myUrl.pathname}`);

//finding hash
console.log(`Hash in given url is : ${myUrl.hash}`);

//finding host
console.log(`Host in given url is : ${myUrl.host}`);

//finding search
console.log(`Search in the given url contains : ${myUrl.search}`);

//finding search params
console.log(`Search parameters in the  given url are : ${myUrl.searchParams}`);
