import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/Card';
import data from './data';
import Nav from './components/Nav';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Create from './components/Create';
  var container=document.getElementById('container');
  var nav= document.getElementById('nav');
var Router= Backbone.Router.extend({

  routes:{
    '' : 'home',
    'login': 'login',
    'register' : 'register',
    'card/:id' : 'card',
    'creator': 'cardCreator'

  },
  home(){
    ReactDom.render(<Home data={data}/>, container);
    ReactDom.render(<Nav/>, nav);
},
  login(){
    ReactDom.render(<Login/>, container);
ReactDom.render(<Nav/>, nav);
  },
  register(){
    ReactDom.render(<Register/>, container);
    ReactDom.render(<Nav/>, nav);

  },
  card(id){
    ReactDom.render(<Nav/>, nav);
  ReactDom.render(<Card data={data[id]}/>, container);
},
cardCreator(){
  ReactDom.render(<Create/>, container);
  ReactDom.render(<Nav/>, nav);

}
});
export default new Router();
