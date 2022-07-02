# Getting Started and Assumptions made for this Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Install Dependencies

In the project directory, install all dependencies:

`npm install`

### API Key

Then set up your `.env.development` file by setting the `REACT_APP_HOTPEPPER_API_KEY` variable to your own API key.

You can generate your own API key from the Hot Pepper API: https://webservice.recruit.co.jp/register

### Run development environment

Next run this script:

`npm run demo`

This project uses a proxy server to work around CORS issues. The above script will run the dev server and proxy serve in parallel.

Then open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Assumptions made

- This application is a prototype and it will be reviewed by a senior developer and product/design team so I can receive feedback about the additional map button feature. This feature was not in the design spec so I need to hear feedback about whether there is anything that can be improved.

- The word "Address" in the design spec should refer to the area the ramen shop is located, and not the full address of the shop. This is because the address is too long to fit in the limited space of the restaurant card. That's the reason why I also implemented the map button feature.

- This list of ramen shop is comprehensive and includes restaurants with ラーメン in either their `category` or `sub-category`
