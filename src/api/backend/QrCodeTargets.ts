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
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class QrCodeTargets<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags qr-code-target
   * @name QrCodeTargetPut
   * @summary Update a certain qr code target.
   * @request PUT:/qr-code-targets/{id}
   * @response `200` `Response` Update a certain qr code target
   * @response `400` `void` Request couldn't be parsed. Or missing organization identifier header. Or missing customer identifier header.
   * @response `502` `void` No qr code target found with the given identifier.
   */
  qrCodeTargetPut = (id: string, body: Request, params: RequestParams = {}) =>
    this.request<Response, void>({
      path: `/qr-code-targets/${id}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
