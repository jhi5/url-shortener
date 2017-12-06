Image Search Abstraction Layer
Created by J. Munford
Node JS / Express / HTML / Postgres

This is a microservice that takes a URL, creates a shortened value for it, stores it into a postgres database. The short url is then available by feeding the API the shortened value. The URL validation isn't perfect. I'm currently using the valid-url module in lieu of writing my own validation.

Part of a series of small API tools created as a way to teach myself API basics.

This project was created as part of a FreeCodeCamp program and to meet the following deliverables:

* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
* If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
* When I visit that shortened URL, it will redirect me to my original link.

TO-DO: Write documentation within the code.
