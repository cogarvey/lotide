# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cogarvey/lotide`

**Require it:**

`const _ = require('@cogarvey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first item in an array
* `tail`: returns the tail of an array: everything except for the first item (head) of the provided array
* `eqArrays`: takes in 2 arrays and returns true or false based on a perfect match
* `middle` : will take in an array and return the middle-most element(s) of the given array
* `assertEqual` : uses template literals when generating the output string
* `assertArraysEqual` : takes in two arras and console.logs an appropriate message to the console
* `assertObjectEqual` : takes in two objects and console.logs an appropriate message to the console
* `countLetters` : takes a sentence (string) and returns a count of each of the letters in the sentence
* `countOnly` : takes in an array and an obkect and will return an object containing counts of everything tjat tje input object listed
* `eqObjects` : takes in two obejcts and returns true or false based on a perfect match
* `findKey` : takes in an oject and a callback, it scans the object and returns the first key for which the callback returns a truthy value, is no key then it returns undefined
* `findKeyByValue` : takes in an object and a value, it scans the object and returns the first key which contains the given value, if no key it returns undefined
* `letterPositions` : returns all the indices (zero-based positions) in the string where each character is found
* `map` : takes in an array and a callback function, returns a new array based on the results of the callback function
* `takeUntil` : takes in an array and a callback, returns a slice of the array with elements taken from the beginning until the callback returns a truthy
* `without` : returns a subset of a given array removing the unwanted elements