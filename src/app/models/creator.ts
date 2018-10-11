import { Image } from "./image";

export class Creator {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    fullName: string;
    modified: Date;
    resourceURI: string;
    urls: any;
    thumbnail: Image;
    series: any;
    stories: any;
    comics: any;
    events: any;
}