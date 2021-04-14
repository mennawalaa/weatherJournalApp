## Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

##used functions##
#getweather#
 async function that use fetch command to get the temp of country using its zip code,
 
#postData#
async function that sends the temp returned by the getweather function,the date,the user feelings
 to an internal server 

#updateUi#
async function used to get the data posted to the server and use it to update the ui via innerHtml
of the text area 

**all these functions starts to take action when clicking on the generate button using the addEventListener **

**condition :there must be an inserted value to the zip code and the feeling text area **