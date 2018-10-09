import { Image } from "./image";

export class Character {
    id:number;
    name:string;
    description:string;
    modified:Date;
    resourceURI:string;
    urls:any[];
    thumbnail:Image;
    comics:any[];
    stories:any[];
    events:any[];
    series:any[];

}