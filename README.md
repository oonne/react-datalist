# react-datalist
------------
A solution that mimics datalist on Safari/iOS

### Demo
[Demo](https://oonne.github.io/react-datalist/build/)

### How to start
* install dependencies
> npm install

* run server
> npm run test

* browse 'localhost:3000'


### Description

``` javascript
import Datalist from './component/Datalist'

<Datalist
  val={val}
  list={list}
  setVal={setValFun}
/>

### Props
* className: - string,

* val: - string,

* setVal: - function,

* list: - array,

* maxRow: - int - default 5.