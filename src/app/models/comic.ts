import { Image } from "./image";

export class Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: Date;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[];
    resourceURI: string;
    urls: any[];
    series: any;
    variants: any[];
    collections: any[];
    collectedIssues: any[];
    dates: any[];
    prices: any[];
    thumbnail: Image;
    images: any[];
    creators: any[];
    characters: any[];
    stories: any[];
    events: any[];
}