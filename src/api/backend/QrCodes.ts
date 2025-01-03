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

export class QrCodes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags qr-code
   * @name QrCodePut
   * @summary Update a certain qr code.
   * @request PUT:/qr-codes/{id}
   * @response `200` `Response` Update a certain qr code
   * @response `400` `void` No qr code found with the given identifier. Or missing organization identifier header. Or missing customer identifier header.
   */
  qrCodePut = (id: string, body: Request, params: RequestParams = {}) =>
    this.request<Response, void>({
      path: `/qr-codes/${id}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags qr-code
   * @name QrCodeGet
   * @summary Retrieve a certain qr code.
   * @request GET:/qr-codes/{id}
   * @response `200` `Response` The retrieved qr code by its identifier
   * @response `400` `void` No qr code found with the given identifier. Or Missing organization identifier header
   */
  qrCodeGet = (id: string, params: RequestParams = {}) =>
    this.request<Response, void>({
      path: `/qr-codes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags qr-code
   * @name QrCodeDelete
   * @summary Delete a specific new qr code.
   * @request DELETE:/qr-codes/{id}
   * @response `204` `void` No description
   * @response `400` `void` Missing organization identifier header. Or missing customer identifier header.
   * @response `404` `void` No description
   * @response `502` `void` No description
   */
  qrCodeDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/qr-codes/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags qr-code
   * @name QrCodePost
   * @summary Create a new qr code.
   * @request POST:/qr-codes
   * @response `201` `Response` Get a certain qr code
   * @response `400` `void` Missing organization identifier header. Or missing customer identifier header.
   * @response `502` `void` No description
   */
  qrCodePost = (body: Request, params: RequestParams = {}) =>
    this.request<Response, void>({
      path: `/qr-codes`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags qr-code
   * @name QrCodeGetAll
   * @summary Retrieve all QR codes for a specific organization.
   * @request GET:/qr-codes
   * @response `200` `(Response)[]` The retrieved QR codes for the organization
   * @response `400` `void` Missing organization identifier header
   */
  qrCodeGetAll = (params: RequestParams = {}) =>
    this.request<Response[], void>({
      path: `/qr-codes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags qr-code
   * @name HistoryGet
   * @summary Retrieve the history of a specific QR code.
   * @request GET:/qr-codes/{id}/history
   * @response `200` `(Response)[]` The retrieved history items for the QR code
   * @response `400` `void` No history found for the given QR code identifier. Or Missing organization identifier header.
   */
  historyGet = (id: string, params: RequestParams = {}) =>
    this.request<Response[], void>({
      path: `/qr-codes/${id}/history`,
      method: "GET",
      format: "json",
      ...params,
    });
}
