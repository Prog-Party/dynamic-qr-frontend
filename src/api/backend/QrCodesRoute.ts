/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  HistoryGetResponse,
  QrCodeGetAllResponse,
  QrCodeGetResponse,
  QrCodePatchRequest,
  QrCodePatchResponse,
  QrCodePostRequest,
  QrCodePostResponse,
  QrCodeTargetPutRequest,
  QrCodeTargetPutResponse,
} from "./data-contracts";

export namespace QrCodes {
  /**
   * No description
   * @tags qr-code
   * @name QrCodeTargetPut
   * @summary Update a certain qr code target.
   * @request PUT:/qr-codes/{id}/target
   * @response `200` `QrCodeTargetPutResponse` Update a certain qr code target
   * @response `400` `void` Request couldn't be parsed. Or missing organization identifier header. Or missing customer identifier header.
   * @response `502` `void` No qr code target found with the given identifier.
   */
  export namespace QrCodeTargetPut {
    export type RequestParams = {
      /** Identifier */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = QrCodeTargetPutRequest;
    export type RequestHeaders = {
      /** The organization identifier */
      "Organization-Identifier": string;
      /** The customer identifier */
      "Customer-Identifier": string;
    };
    export type ResponseBody = QrCodeTargetPutResponse;
  }

  /**
   * No description
   * @tags qr-code
   * @name QrCodePost
   * @summary Create a new qr code.
   * @request POST:/qr-codes
   * @response `201` `QrCodePostResponse` Get a certain qr code
   * @response `400` `void` Missing organization identifier header. Or missing customer identifier header.
   * @response `502` `void` No description
   */
  export namespace QrCodePost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = QrCodePostRequest;
    export type RequestHeaders = {
      /** The organization identifier */
      "Organization-Identifier": string;
      /** The customer identifier */
      "Customer-Identifier": string;
    };
    export type ResponseBody = QrCodePostResponse;
  }

  /**
   * No description
   * @tags qr-code
   * @name QrCodeGetAll
   * @summary Retrieve all QR codes for a specific organization.
   * @request GET:/qr-codes
   * @response `200` `(QrCodeGetAllResponse)[]` The retrieved QR codes for the organization
   * @response `400` `void` Missing organization identifier header
   */
  export namespace QrCodeGetAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The organization identifier */
      "Organization-Identifier": string;
    };
    export type ResponseBody = QrCodeGetAllResponse[];
  }

  /**
   * No description
   * @tags qr-code
   * @name QrCodePatch
   * @summary Update a certain qr code.
   * @request PATCH:/qr-codes/{id}
   * @response `200` `QrCodePatchResponse` Update a certain qr code
   * @response `400` `void` No qr code found with the given identifier. Or missing organization identifier header. Or missing customer identifier header.
   */
  export namespace QrCodePatch {
    export type RequestParams = {
      /** Identifier */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = QrCodePatchRequest;
    export type RequestHeaders = {
      /** The organization identifier */
      "Organization-Identifier": string;
      /** The customer identifier */
      "Customer-Identifier": string;
    };
    export type ResponseBody = QrCodePatchResponse;
  }

  /**
   * No description
   * @tags qr-code
   * @name QrCodeGet
   * @summary Retrieve a certain qr code.
   * @request GET:/qr-codes/{id}
   * @response `200` `QrCodeGetResponse` The retrieved qr code by its identifier
   * @response `400` `void` No qr code found with the given identifier. Or Missing organization identifier header
   */
  export namespace QrCodeGet {
    export type RequestParams = {
      /** Identifier */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The organization identifier */
      "Organization-Identifier": string;
    };
    export type ResponseBody = QrCodeGetResponse;
  }

  /**
   * No description
   * @tags qr-code
   * @name QrCodeDelete
   * @summary Delete a specific new qr code.
   * @request DELETE:/qr-codes/{id}
   * @response `204` `void` No description
   * @response `400` `void` Missing organization identifier header. Or missing customer identifier header.
   * @response `404` `void` No description
   * @response `502` `void` No description
   */
  export namespace QrCodeDelete {
    export type RequestParams = {
      /** Identifier */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The organization identifier */
      "Organization-Identifier": string;
      /** The customer identifier */
      "Customer-Identifier": string;
    };
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags qr-code
   * @name HistoryGet
   * @summary Retrieve the history of a specific QR code.
   * @request GET:/qr-codes/{id}/history
   * @response `200` `(HistoryGetResponse)[]` The retrieved history items for the QR code
   * @response `400` `void` No history found for the given QR code identifier. Or Missing organization identifier header.
   */
  export namespace HistoryGet {
    export type RequestParams = {
      /** Identifier */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /** The organization identifier */
      "Organization-Identifier": string;
    };
    export type ResponseBody = HistoryGetResponse[];
  }
}
