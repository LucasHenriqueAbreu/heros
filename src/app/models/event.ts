import { Image } from "./image";

export class Event {
    id:number;
    title:string;
    description:string;
    resourceURI:string;
    urls:any[];
    modified:Date;
    start:Date;
    end:Date;
    thumbnail:Image;
    comics:any;
    stories:any;
    series:any;
    characters:any;
    creators:any;
    next:any;
    previous:any;
}