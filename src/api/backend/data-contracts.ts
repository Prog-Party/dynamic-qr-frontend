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

export interface HistoryGetResponse {
  qrCodeId?: string;
  order?: string;
  /** @format date-time */
  timestamp?: string;
  customerId?: string;
  organizationId?: string;
  eventType?: string;
  details?: Record<string, string>;
}

export interface QrCodeGetAllResponse {
  id?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  imageUrl?: string;
  /** @format int32 */
  imageHeight?: number;
  /** @format int32 */
  imageWidth?: number;
  includeMargin?: boolean;
}

export interface QrCodeGetResponse {
  value?: string;
  includeMargin?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
  imageUrl?: string;
  /** @format int32 */
  imageHeight?: number;
  /** @format int32 */
  imageWidth?: number;
}

export interface QrCodePatchRequest {
  includeMargin?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
  imageUrl?: string;
  /** @format int32 */
  imageHeight?: number;
  /** @format int32 */
  imageWidth?: number;
}

export interface QrCodePatchResponse {
  id?: string;
}

export interface QrCodePostRequest {
  includeMargin?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
  imageUrl?: string;
  /** @format int32 */
  imageHeight?: number;
  /** @format int32 */
  imageWidth?: number;
  value?: string;
}

export interface QrCodePostResponse {
  id?: string;
}

export interface QrCodeTargetPutRequest {
  value?: string;
}

export interface QrCodeTargetPutResponse {
  id?: string;
}
