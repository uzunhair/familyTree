// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';

export function GetAllPerson():Promise<Array<main.BasicPersonInfo>>;

export function GetPersonByID(arg1:string):Promise<main.PersonWithDetails>;

export function GetPersonByIdAndTitle(arg1:string):Promise<main.BasicPersonInfo>;

export function GetPersonList(arg1:string):Promise<main.SearchResult>;

export function Greet(arg1:string):Promise<string>;

export function LoadFromJSON():Promise<Array<main.FullPersonInfo>>;

export function SaveToJSON(arg1:string,arg2:Array<main.FullPersonInfo>):Promise<void>;

export function SaveUsersToJSONFile(arg1:Array<main.FullPersonInfo>):Promise<Array<main.FullPersonInfo>>;

export function UpdatePersonByID(arg1:main.FullPersonInfo,arg2:Array<main.FullPersonInfoActions>):Promise<string>;
