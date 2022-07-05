import {
  filterJustCategories, formatCategories, formatItemDescription, formatItemDetail, formatItems,
} from '../shared/generalHelpers';
import Logger from '../shared/logger';

class ItemController {
  static getItems = async ({ clientQuery }) => {
    try {
      const result = await fetch(`${process.env.ML_BACKEND}/sites/MLA/search?q=${clientQuery}`);
      const jsonResult = await result.json();
      const items = jsonResult.results.slice(0, 4) || [];
      const categories = filterJustCategories(jsonResult.filters) || [];

      const itemsFormated = formatItems(items);
      const categoriesFormated = formatCategories(categories);

      const response = {
        items: itemsFormated,
        categories: categoriesFormated,
      };

      return response;
    } catch (e) {
      Logger.error('Request in Mercadolibre make an error!');
      throw e;
    }
  };

  static getItemDetail = async ({ itemId }): Promise<any> => {
    try {
      const result = await fetch(`${process.env.ML_BACKEND}/items/${itemId}`);
      const jsonResult = await result.json();

      const itemFormated = formatItemDetail(jsonResult);
      return itemFormated;
    } catch (e) {
      Logger.error('Request in Mercadolibre make an error!');
      throw e;
    }
  };

  static getItemDescription = async ({ itemId }) => {
    try {
      const result = await fetch(`${process.env.ML_BACKEND}/items/${itemId}/description`);
      const jsonResult = await result.json();

      const itemDescriptionFormated = formatItemDescription(jsonResult);
      return itemDescriptionFormated;
    } catch (e) {
      Logger.error('Request in Mercadolibre make an error!');
      throw e;
    }
  };

  static getItemDetailWithDescription = async ({ itemId }) => {
    const promisesArray = [
      this.getItemDetail({ itemId }),
      this.getItemDescription({ itemId }),
    ];

    const [itemDetail, itemDescription] = await Promise.all(promisesArray);
    const { categories } = await this.getItems({ clientQuery: itemDetail.title });
    const itemFormated = { ...itemDetail, ...itemDescription, categories };

    return itemFormated;
  };
}

export const { getItems, getItemDetailWithDescription } = ItemController;
export default ItemController;
