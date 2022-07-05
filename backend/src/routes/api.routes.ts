import express from 'express';
import { OK } from 'http-status';
import Logger from '../shared/logger';
import { GeneralResponse, Req } from '../interfaces/GeneralResponse';
import BadRequestException from '../shared/Exceptions/BadRequestException';
import { getItems, getItemDetailWithDescription } from '../controllers/items.controller';
import { formatErrorAndOutput, formatFinalResponse, inizializeGeneralResponse } from '../shared/generalHelpers';

const router = express.Router();

router.get('/items', async (req:Req, res) => {
  let response:GeneralResponse = inizializeGeneralResponse();

  try {
    const clientQuery = req.query.q;
    if (!clientQuery) throw new BadRequestException('Prop query is required!');

    const data = { clientQuery };
    const result = await getItems(data);

    response.status = OK;
    response.items = result.items;
    response.categories = result.categories;
  } catch (e: any) {
    const responseFormated = formatErrorAndOutput(req, e);
    Logger.error(responseFormated.msg);
    response = responseFormated.output;
  }

  Logger.info('Response is:', formatFinalResponse(response));
  res.status(response.status).json(formatFinalResponse(response));
});

router.get('/items/:id', async (req, res) => {
  let response:GeneralResponse = inizializeGeneralResponse();
  const itemId = req.params?.id;
  if (!itemId) throw new BadRequestException('Prop itemId is required!');

  try {
    const data = { itemId };
    const result = await getItemDetailWithDescription(data);
    response.status = OK;
    response.item = result;
  } catch (e) {
    const responseFormated = formatErrorAndOutput(req, e);
    Logger.error(responseFormated.msg);
    response = responseFormated.output;
  }

  Logger.info('Response is:', formatFinalResponse(response));
  res.status(response.status).json(formatFinalResponse(response));
});

export const api = router;
export default api;
