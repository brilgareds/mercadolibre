import { Request } from 'express';

export interface Author {
  name: string,
  lastname: string
}

export interface Price {
  currency: string,
  amount:Number,
  decimals:Number
}

export interface Item {
  id: string,
  title: string,
  price: Price
}

export interface GeneralResponse {
  autor: Author,
  status: number,
  item?: any,
  items?: Array<Item>,
  categories?: Array<string>,
}

export interface FinalResponse {
  autor: Author,
  items?: Array<Item>,
  categories?: Array<string>,
}

export interface Req extends Request {
  query: {
    q?: string
  }
}

export interface ErrorFormated {
  output: GeneralResponse,
  msg: string | any
}

export type TypeLogger = 'info' | 'error' | 'debug';
