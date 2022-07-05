import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status';
import BadRequestException from './Exceptions/BadRequestException';
import { ErrorFormated, FinalResponse, GeneralResponse } from '../interfaces/GeneralResponse';

class GeneralHelpers {
  static inizializeGeneralResponse = ():GeneralResponse => ({
    status: INTERNAL_SERVER_ERROR,
    autor: {
      name: 'Gabriel',
      lastname: 'Angarita',
    },
  });

  static dateFormat = ({ type = 'es' }) => {
    const date = new Date();

    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    const hour = (`0${date.getHours()}`).slice(-2);
    const minutes = (`0${date.getMinutes()}`).slice(-2);
    const seconds = (`0${date.getSeconds()}`).slice(-2);

    const finalDate = (type.toLowerCase() === 'es')
      ? `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
      : `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`;

    return finalDate;
  };

  static formatFinalResponse = (data: GeneralResponse):FinalResponse => {
    const { status, ...response } = data;

    return { ...response };
  };

  static getErrorStatus = (error: any) => {
    let status = INTERNAL_SERVER_ERROR;

    if (error instanceof BadRequestException) status = BAD_REQUEST;

    return status;
  };

  static formatCategories = (categories) => {
    const newCategories: any = categories.map(({ name }) => name);

    return newCategories;
  };

  static formatItems = (items) => {
    const newItems = items.map((item) => {
      const fullPrice = item.price?.toString();
      const dotPosition = fullPrice?.indexOf('.');
      const justAmount = (dotPosition !== -1) ? fullPrice?.slice(0, dotPosition) : fullPrice;
      const justDecimals = (dotPosition !== -1) ? fullPrice?.slice(dotPosition + 1) : 0;

      const newPriceFormat = {
        currency: item?.currency_id,
        amount: parseFloat(justAmount),
        decimals: parseFloat(justDecimals),
      };

      const newItem = {
        id: item.id,
        state: item.address?.state_name,
        title: item.title,
        price: newPriceFormat,
        picture: item.thumbnail,
        condition: item.condition,
        free_shiping: !!(item.shipping?.free_shipping),
      };

      return newItem;
    });

    return newItems;
  };

  static filterJustCategories = (result) => {
    const categories: any = [];

    result.forEach((item) => {
      if (item.id === 'category' && item.values?.[0]?.path_from_root) {
        item.values[0].path_from_root.forEach((category) => categories.push(category));
      }
    });

    return categories;
  };

  static formatErrorAndOutput = (req, error: any): ErrorFormated => {
    const status = this.getErrorStatus(error);
    let msg = error;

    if (status === BAD_REQUEST) msg = `Route "${req.url}" - ${error.message}`;

    const messageErrorAndResponse = {
      output: {
        ...this.inizializeGeneralResponse(),
        status,
      },
      msg,
    };

    return messageErrorAndResponse;
  };

  static formatItemDetail = (item) => {
    const fullPrice = item.price.toString();
    const dotPosition = fullPrice.indexOf('.');
    const justAmount = (dotPosition !== -1) ? fullPrice?.slice(0, dotPosition) : fullPrice;
    const justDecimals = (dotPosition !== -1) ? fullPrice?.slice(dotPosition + 1) : 0;

    const newPriceFormat = {
      currency: item.currency_id,
      amount: parseFloat(justAmount),
      decimals: parseFloat(justDecimals),
    };

    const newItem = {
      id: item.id,
      title: item.title,
      price: newPriceFormat,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: !!item.shipping?.free_shipping,
      sold_quantity: item.sold_quantity,
    };

    return newItem;
  };

  static formatItemDescription = (fullDescription) => ({ description: fullDescription.plain_text });
}

export default GeneralHelpers;
export const {
  dateFormat,
  formatItems,
  getErrorStatus,
  formatItemDetail,
  formatCategories,
  formatFinalResponse,
  filterJustCategories,
  formatErrorAndOutput,
  formatItemDescription,
  inizializeGeneralResponse,
} = GeneralHelpers;
