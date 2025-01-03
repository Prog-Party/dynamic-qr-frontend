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

import { Request, Response } from "./data-contracts";

export namespace QrCodeTargets {
  /**
   * No description
   * @tags qr-code-target
   * @name QrCodeTargetPut
   * @summary Update a certain qr code target.
   * @request PUT:/qr-code-targets/{id}
   * @response `200` `Response` Update a certain qr code target
   * @response `400` `void` Request couldn't be parsed. Or missing organization identifier header. Or missing customer identifier header.
   * @response `502` `void` No qr code target found with the given identifier.
   */
  export namespace QrCodeTargetPut {
    export type RequestParams = {
      /** Identifier */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Request;
    export type RequestHeaders = {
      /** The organization identifier */
      "Organization-Identifier": string;
      /** The customer identifier */
      "Customer-Identifier": string;
    };
    export type ResponseBody = Response;
  }
}
