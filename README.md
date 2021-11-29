# open-weather-api
1. Fork and clone the repo locally

2. Install the dependencies
    ```
    npm i
    ```

3. Split terminal into 2 windows

4. To start the server with nodemon
    ```
    npm run start
    ```

5. To run test suite(in progress)
    ```
    npm run test
    ```

6. You could use Postman to test and trigger the responses from the api
    - GET request
    - endpoint: 127.0.0.1:1774/local
    - parameters:
        - zipcode: 5 digit number representing the desired location
        - apikey: Use api key provided from signup with https://openweathermap.org/
        - units: Imperial or metric may be chosen for desired denomination of the weather. Default is kelvin


# Documentation and Resources
  - https://openweathermap.org/
  - https://expressjs.com/
  - https://axios-http.com/
  - https://mochajs.org/
  - https://www.chaijs.com/
  - https://jestjs.io/
