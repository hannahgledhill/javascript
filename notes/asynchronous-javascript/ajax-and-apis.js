/***
 * synchronous code means each line finishes executing before the next line starts
 * this creates problems where 1 line of code takes a long time to run
 * 
 * asynchronous code is running in the background without preventing the main code from running
 * or may have code that is only executed after a certain amount of time eg. a timer
 * asynchronous code is executed after a task is finished running while the rest of the code is still running
 * it is "non-blocking"
 * 
 * img.src = 'dog.jpg'; // this is actually asynchronous because it starts loading he image
 * img.addEventListener('load', function(){}); // this code listens for the event that is emmitted when the image has been loaded and then executes some other code
 * 
 * AJAX - asynchronous javascript and xml, allows us to communicate with remote web servers in an asynchronous way and update our application dynamically
 * works through requests (GET, POST etc) and responses from the web server's api
 * 
 * WEB API - application programming interface, allows 2 apps to talk to eachother and exchange information
 * eg. dom api, geolocation api in browser, own class api where some methods are part of the public interface
 * a web api is an application running on a web server that receives requests for data and sends back data as a response
 * 
 * these days ajax uses json rather than xml
 * 
 * every url has a protocol, HTTP OR HTTPS, then a domain name and after a slash the resource path
 * the domain has  to be converted to a real address (IP address and port number), this happens through DNS
 * browser makes request to DNS with the domain name which then converts it to the IP address
 * after the real address has been sent back to the browser the browser can call it
 * this establishes a TCP/IP socket connection between the web server and the client browser
 * tcp is the transmission control protocol, ip is the internet protocol - internet's control system that sets the rules about how data moves across the itnernet
 * 
 * the http request is made through the TCP/IP socket (hypertext transfer protocol)
 * it contains the HTTP method (eg. GET, POST), the resource path (request target) and the HTTP version
 * will then have HTTP request headers eg. the host of the requesting site, the user-agent (browser), accepted languages etc.
 * then the request body, more important in POST requests
 * 
 * HTTPS in encrypted using TLS or SSL, but all the logic still applies
 * 
 * the server works on the request and once it is ready it sends the data back using an HTTP response
 * sill has start line with a status code eg. 200 and a message eg. "OK"
 * response headers are information about the response
 * then the response body containing the html of the web page or the json data coming back from the api
 * if it's html it will get scanned and each different file that needs to be loaded will create a new http request to the server
 * 
 * TCP breaks the requests and responses into thousands of small chunks (packets) before they are sent
 * once the paackets arrive at the destination, TCP reassumbles all the packages back into their original response
 * this way each packet can take a different route through the internet and so the whole chunk can get there quicker rather than going one at a time
 * the IP sends and routes the packets through the internet to make sure they get where they need to go
 * 
 * 
 * 
 */


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function(){
//         const [data2] = JSON.parse(this.responseText);
//         console.log(data2);
//         renderCountry(data2, 'neighbour');
//     });
// });