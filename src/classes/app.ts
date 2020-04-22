import {Application, urlencoded, json } from 'express'
import morgan from 'morgan';

export default class App{
    public app :Application; 
    public static _instance : App;
  constructor( app :Application ){
       this.app =  app;
       this.middlewares();
    }
    private middlewares(){
         this.app.use(urlencoded( {  extended : false}));
         this.app.use(json());
         this.app.use(morgan('tiny'));
    }
}