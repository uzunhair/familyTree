// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';
import {force_graph} from '../models';
import {types} from '../models';

export function GetAllPerson():Promise<Array<main.BasicPersonInfo>>;

export function GetNodes():Promise<Array<force_graph.NodesPersonInfo>>;

export function GetPersonByID(arg1:string):Promise<main.PersonWithDetails>;

export function GetPersonByIdAndTitle(arg1:string):Promise<main.BasicPersonInfo>;

export function GetPersonList(arg1:string):Promise<main.SearchResult>;

export function Greet(arg1:string):Promise<string>;

export function LoadFromJSON():Promise<Array<types.FullPersonInfo>>;

export function SaveToJSON(arg1:string,arg2:Array<types.FullPersonInfo>):Promise<void>;

export function UpdatePersonByID(arg1:types.FullPersonInfo,arg2:Array<main.FullPersonInfoActions>,arg3:main.Action):Promise<string>;
