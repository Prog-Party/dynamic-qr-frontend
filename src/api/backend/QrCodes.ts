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
} from "./data-contracts"
import { ContentType, HttpClient, RequestParams } from "./http-client"

export class QrCodes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags qr-code
   * @name QrCodeTargetPut
   * @summary Update a certain qr code target.
   * @request PUT:/qr-codes/{id}/target
   * @response `200` `QrCodeTargetPutResponse` Update a certain qr code target
   * @response `400` `void` Request couldn't be parsed. Or missing organization identifier header. Or missing customer identifier header.
   * @response `502` `void` No qr code target found with the given identifier.
   */
  qrCodeTargetPut = (id: string, body: QrCodeTargetPutRequest, params: RequestParams = {}) =>
    this.request<QrCodeTargetPutResponse, void>({
      path: `/qr-codes/${id}/target`,
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
   * @name QrCodePost
   * @summary Create a new qr code.
   * @request POST:/qr-codes
   * @response `201` `QrCodePostResponse` Get a certain qr code
   * @response `400` `void` Missing organization identifier header. Or missing customer identifier header.
   * @response `502` `void` No description
   */
  qrCodePost = (body: QrCodePostRequest, params: RequestParams = {}) =>
    this.request<QrCodePostResponse, void>({
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
   * @response `200` `(QrCodeGetAllResponse)[]` The retrieved QR codes for the organization
   * @response `400` `void` Missing organization identifier header
   */
  qrCodeGetAll = (params: RequestParams = {}) =>
    this.request<QrCodeGetAllResponse[], void>({
      path: `/qr-codes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags qr-code
   * @name QrCodePatch
   * @summary Update a certain qr code.
   * @request PATCH:/qr-codes/{id}
   * @response `200` `QrCodePatchResponse` Update a certain qr code
   * @response `400` `void` No qr code found with the given identifier. Or missing organization identifier header. Or missing customer identifier header.
   */
  qrCodePatch = (id: string, body: QrCodePatchRequest, params: RequestParams = {}) =>
    this.request<QrCodePatchResponse, void>({
      path: `/qr-codes/${id}`,
      method: "PATCH",
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
   * @response `200` `QrCodeGetResponse` The retrieved qr code by its identifier
   * @response `400` `void` No qr code found with the given identifier. Or Missing organization identifier header
   */
  qrCodeGet = (id: string, params: RequestParams = {}) =>
    this.request<QrCodeGetResponse, void>({
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
   * @name HistoryGet
   * @summary Retrieve the history of a specific QR code.
   * @request GET:/qr-codes/{id}/history
   * @response `200` `(HistoryGetResponse)[]` The retrieved history items for the QR code
   * @response `400` `void` No history found for the given QR code identifier. Or Missing organization identifier header.
   */
  historyGet = (id: string, params: RequestParams = {}) =>
    this.request<HistoryGetResponse[], void>({
      path: `/qr-codes/${id}/history`,
      method: "GET",
      format: "json",
      ...params,
    });
}
