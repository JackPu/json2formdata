# json2formdata

[![CircleCI](https://travis-ci.org/JackPu/json2formdata.svg?branch=master)](https://circleci.com/gh/JackPu/json2formdata)
[![npm](https://img.shields.io/npm/v/json2formdata.svg?maxAge=2592000)]()


A function to transform JSON to form data.

## How to use

### Npm

``` bash
$  npm install json2formdata -save
```


``` es6
import json2formdata from 'json2formdata';


const data = json2formdata('{"a":[{"a":"a"},{"b":"b"}]}');

//...
```
