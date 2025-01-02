import { constructUrl } from "@/api/ApiHelper"
import axios from "axios"

export interface QrCodeHistoryResponse {
  QrCodeId: string;
  Order: string;
  Timestamp: string;
  CustomerId: string;
  OrganizationId: string;
  EventType: string;
  Details: { [key: string]: string };
}

const orderResponse = (response: QrCodeHistoryResponse[]) => {
  return response.sort((a, b) => a.Order.localeCompare(b.Order))
}

export const getQrCodeHistory = async (organizationIdentifier: string, qrCodeId: string): Promise<QrCodeHistoryResponse[]> => {
  try {

    //until the endpoint is implemented, this function will return some dummy data
    const dummyData = [
      {
        "QrCodeId": "leetleet",
        "Order": "20241223104503-7f424338-b81c-44bf-8706-55ad0aa18e43",
        "Timestamp": "2024-12-23T11:56:51.6667002+01:00",
        "CustomerId": "dennis",
        "OrganizationId": "1337",
        "EventType": "Lifecycle_Created",
        "Details": {}
      },
      {
        "QrCodeId": "leetleet",
        "Order": "20241223105743-b0d55348-5be1-4e10-8964-8b211908fa42",
        "Timestamp": "2024-12-23T11:57:45.2424182+01:00",
        "CustomerId": "dennis",
        "OrganizationId": "1337",
        "EventType": "Lifecycle_Updated",
        "Details": {
          "IncludeMargin": "False",
          "BackgroundColor": "ffffffff",
          "ForegroundColor": "ff000000",
          "ImageHeight": "103"
        }
      },
      {
        "QrCodeId": "leetleet",
        "Order": "20241223105903-bab776da-1529-41db-bff6-974480678451",
        "Timestamp": "2024-12-23T11:59:05.2503756+01:00",
        "CustomerId": "dennis",
        "OrganizationId": "1337",
        "EventType": "Lifecycle_Updated",
        "Details": {
          "IncludeMargin": "True",
          "BackgroundColor": "ffffffff",
          "ForegroundColor": "ff000000"
        }
      },
      {
        "QrCodeId": "leetleet",
        "Order": "20241223105920-28c04793-7ee4-4b20-852d-eba60d6f3694",
        "Timestamp": "2024-12-23T11:59:21.4292635+01:00",
        "CustomerId": "dennis",
        "OrganizationId": "1337",
        "EventType": "Lifecycle_Updated",
        "Details": {
          "IncludeMargin": "False",
          "BackgroundColor": "ffff0000",
          "ForegroundColor": "ff000000"
        }
      },
      {
        "QrCodeId": "leetleet",
        "Order": "20241223114253-b0b673e6-a0a8-4ffc-9368-07703d5d38da",
        "Timestamp": "2024-12-23T12:42:54.7255063+01:00",
        "CustomerId": "dennis",
        "OrganizationId": "1337",
        "EventType": "Lifecycle_UpdatedTarget",
        "Details": {
          "NewValue": "https://www.dem-it.nl"
        }
      },
      {
        "QrCodeId": "leetleet",
        "Order": "20241223114347-0197ba03-e0c5-454a-8a15-abc5d4c9dc69",
        "Timestamp": "2024-12-23T12:43:49.0726093+01:00",
        "CustomerId": "dennis",
        "OrganizationId": "1337",
        "EventType": "Lifecycle_Updated",
        "Details": {
          "IncludeMargin": "False",
          "BackgroundColor": "ffffffff",
          "ForegroundColor": "ff000000",
          "ImageWidth": "103"
        }
      }
    ]

    const responseDataDummy = dummyData as QrCodeHistoryResponse[]

    return orderResponse(responseDataDummy)

    const url = constructUrl(`qr-codes/${qrCodeId}/history`)
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Organization-Identifier": organizationIdentifier
      }
    })
    const responseData = response.data as QrCodeHistoryResponse[]
    return orderResponse(responseData)
  } catch (error) {
    throw error
  }
}