import express from 'express';
import { port } from '../globals/enviroment';
import App from './app';
export default class Server {
    public app:express.Application;
    private static _instance :Server;
    public port= port;
     constructor ( ){
       this.app = express();
       //todos los objetos pasan por referncia
       new App(this.app);
     }
     public static get instance(){
        return this._instance  || (this._instance =  new this());
     }
     start(resolve:any){
        this.app.listen( this.port , resolve ( this.port));
     }
}