# Note Taker [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## Description 

A online note website where you can create and delete notes from a heroku/express backend server!

## Table of Contents 

* [Usage](#usage)
* [License](#license)
* [Challenges](#challenges)
* [Screenshot](#screenshot)

## Usage 

Go to "https://note-taker-timprimmer.herokuapp.com/"

## License 

This project is using the [Creative Commons](http://creativecommons.org/publicdomain/zero/1.0/) license. 

## Challenges

Creating the server itself wasn't too challenging, it was mostly hosting it on heroku and doing the route-back end work like creating and deleting the notes that was the hard part. Deleting was interesting because you have to worry about the uniqueness of each ID, so I had to re-set each ID after each note gets deleted, and have a function to check to see if the ID exists at all. 

## Screenshot
![Screenshot of app and output](/public/assets/imgs/screenshot.png "Note Taker Example")
