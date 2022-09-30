import cors from 'cors';
import dotenv from 'dotenv'
import express, { Request, Response } from 'express';
import { ApiError, AuthenticationController, Client, PartnerCredentials, TransactionsController } from 'finicity-apilib';
import { getConnection } from './connection';
import { insertquery } from './jsonToSql';

dotenv.config();

export const router = express.Router();

router.use(cors())

const client = new Client({
  finicityAppKey: process.env.FINICITY_APP_KEY,
  timeout: 10000,
  finicityAppToken: process.env.FINICITY_APP_TOKEN,
});
const authenticationController = new AuthenticationController(client);

router.get('/finicitydata', finicityController);

async function finicityController(req: Request, resp: Response) {

  // add code to call get transactions all endpoint
  const transactionsController = await createTransactionController(client);

  const accept = 'application/json';
  const customerId = BigInt(6001391193);
  const fromDate = BigInt(1588365858);
  const toDate = BigInt(1653110643);
  const start = BigInt(1);
  const limit = BigInt(1000);
  const sort = 'desc';
  const includePending = false;
  const { result } = await transactionsController.getCustomerTransactionsAll(accept, customerId, fromDate, toDate, start, limit, sort, includePending);

  const autoQuery = insertquery(result);

  //create snowflake connection
  var connection = getConnection();      
  console.log("connectionId is: ", connection.getId());

  connection.execute(
  {
    sqlText: `DELETE FROM TRANSACDATA`,
    streamResult: true,
    complete: function (_err, stmt, rows) {
      rows = [];
      stmt.streamRows(
        //   {
        //   start: 0,
        //   end: 10,
        // }
      )
        .on('error', function (err) {
          console.error('Unable to consume requested rows');
        })
        .on('data', function (row) {
          if (typeof rows !== 'undefined')
            rows.push(row);
          console.log("rows: ", rows);
        })
        .on('end', function () {
          if (typeof rows !== 'undefined')
            console.log('Number of rows consumed for delete : ' + rows.length);
        });
    }
  });
      
  connection.execute(
    {
      sqlText: autoQuery,
      streamResult: true,
      complete: function (err, stmt, rows) {
        rows = [];
        stmt.streamRows(
        //   {
        //   start: 0,
        //   end: 10,
        // }
        )
          .on('error', function (err) {
            console.error('Unable to consume requested rows');
          })
          .on('data', function (row) {
            if (typeof rows !== 'undefined')
              rows.push(row);
            console.log("rows: ", rows);
          })
          .on('end', function () {
            if (typeof rows !== 'undefined')
              console.log('Number of rows consumed for insert: ' + rows.length);
              resp.send(200);
          });
      }
    });
}


// add code to get access token
async function getAccessToken(): Promise<string> {
  const contentType = 'application/json';
  const accept = 'application/json';
  const body: PartnerCredentials = {
    partnerId: process.env.FINICITY_PARTNER_ID ?? '',
    partnerSecret: process.env.FINICITY_PARTNER_SECRET ?? '',
  };

  try {
    const { result } = await authenticationController.partnerAuthentication(contentType, accept, body);
    return result.token;
  } catch(error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      console.log(errors);
      return '';
    }
    return '';
  }
}

// add code to get tokenized client
async function createTokenizedClient(client: Client) {
  return client.withConfiguration( {finicityAppToken: await getAccessToken()} );
}

// add code to create transactions controller with initialized client
async function createTransactionController(client: Client) {
  const tokenizedClient = await createTokenizedClient(client);
  return new TransactionsController(tokenizedClient);
}