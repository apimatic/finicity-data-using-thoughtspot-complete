
# Getting Started with Finicity API

## Introduction

Finicity API

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=FinicityAPI&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=FinicityAPI&workspaceName=finicity-apilib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Finicity APILib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add FinicityApilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=FinicityAPI&workspaceName=finicity-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install FinicityApilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `finicityAppKey` | `string` | Finicity-App-Key from Developer Portal |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `finicityAppToken` | `string` |  |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  finicityAppKey: 'Finicity-App-Key',
  timeout: 0,
  environment: Environment.Production,
  finicityAppToken: 'Finicity-App-Token',
})
```

## Authorization

This API uses `Custom Header Signature`.

## API Errors

Here is the list of errors that the API might throw.

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | The token has expired. | [`ExpiredTokenError`](doc/models/expired-token-error.md) |

## List of APIs

* [Account Owner](doc/controllers/account-owner.md)
* [Accounts](doc/controllers/accounts.md)
* [Analytics and Attributes](doc/controllers/analytics-and-attributes.md)
* [App Registration and OAuth Migration](doc/controllers/app-registration-and-oauth-migration.md)
* [Asset](doc/controllers/asset.md)
* [Authentication](doc/controllers/authentication.md)
* [Bank Statements](doc/controllers/bank-statements.md)
* [Cash Flow](doc/controllers/cash-flow.md)
* [Connect](doc/controllers/connect.md)
* [Consumer](doc/controllers/consumer.md)
* [Customer](doc/controllers/customer.md)
* [Deprecated](doc/controllers/deprecated.md)
* [Get Portfolios](doc/controllers/get-portfolios.md)
* [Get Reports by Consumer](doc/controllers/get-reports-by-consumer.md)
* [Get Reports by Customer](doc/controllers/get-reports-by-customer.md)
* [Institutions](doc/controllers/institutions.md)
* [Liabilities](doc/controllers/liabilities.md)
* [Pay Statements](doc/controllers/pay-statements.md)
* [Payments](doc/controllers/payments.md)
* [Transactions](doc/controllers/transactions.md)
* [TxPush](doc/controllers/txpush.md)
* [Verify Assets](doc/controllers/verify-assets.md)
* [Verify Employment](doc/controllers/verify-employment.md)
* [Verify Income](doc/controllers/verify-income.md)
* [Verify Income and Employment](doc/controllers/verify-income-and-employment.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

