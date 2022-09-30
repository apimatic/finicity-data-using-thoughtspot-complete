import cors from 'cors';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { isQueryData } from './queryData';
import { ApiError, Client, DataController, SessionController, TspublicRestV2DataSearchRequest, TspublicRestV2SessionGettokenRequest } from '@thoughtspot/rest-api-sdk';

export const router = express.Router();
router.use(cors());

dotenv.config();

// add code to initialize the client and session controller
const client = new Client({
  acceptLanguage: 'application/json',
  contentType: 'application/json',
  timeout: 10000,
  accessToken: process.env.THOUGHTSPOT_ACCESS_TOKEN,
  baseUrl: 'https://my2.thoughtspot.cloud',
});

router.get("/", thoughtspotController);

async function thoughtspotController(req: Request, resp: Response) {
  const measure = req.query.measure;
  const attribute = req.query.attribute;

  // add code to call search query data through data controller
  const dataController = await createDataController(client);

  const body: TspublicRestV2DataSearchRequest = {
    queryString: `[${attribute}] [${measure}]`,
    dataObjectId: 'edc2734b-065b-4f8e-8770-1a0e233044a0',
  };

  let res: unknown
  
  try {
    const { result } = await dataController.searchQueryData(body);
    res = result
  } catch(error) {
    console.log(error);
  }

  let dataResult1 = [];
  if (isQueryData(res)) {
    for (let i = 0; i < res.data.length; i++) {
      dataResult1.push({ name: res.data[i][0], value: res.data[i][1] });
    }
  }
  try {
    //sending graph plotting data
    resp.send(dataResult1);
  } catch (error) {
    resp.send(error)
  }
}

async function getBearerToken(): Promise<string | undefined> {
  // add code to get token through session controller
  const sessionController = new SessionController(client);
  const body: TspublicRestV2SessionGettokenRequest = {
    userName: process.env.THOUGHTSPOT_USER_NAME ?? '',
    password: process.env.THOUGHTSPOT_PASSWORD
  };
  
  const { result } = await sessionController.getToken(body);
  console.log(result.token?.length);
  return result.token;
}

async function createDataController(client: Client) {
  // add code to create data controller
  const tokenizedClient = client.withConfiguration({ accessToken: await getBearerToken() });
  const dataController = new DataController(tokenizedClient);
  return dataController;
}