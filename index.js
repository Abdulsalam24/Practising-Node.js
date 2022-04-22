const fs = require('fs');
const path = require('path');
const os = require('os')
const express = require('express')
// const url = require('url')

const myUrl = new URL ('http://mysite.com/hello.html?id=100&status=100')

console.log(myUrl.searchParams)
myUrl.searchParams.append('htis' , 'abc')

myUrl.searchParams.forEach((value , name) => console.log(`this is the ${value} and the ${name}`))