import { constructUrl } from "@/api/ApiHelper"
import axios from "axios"

export interface QrCodePutRequest {
  IncludeMargin: boolean;
  BackgroundColor?: string;
  ForegroundColor?: string;
  ImageUrl?: string;
  ImageHeight?: number;
  ImageWidth?: number;
}

export const updateQrCode = async (organizationIdentifier: string, qrCodeId: string, data: QrCodePutRequest) => {
  try {
    const url = constructUrl(`qr-codes/${qrCodeId}`)
    const response = await axios.put(url, data, {
      headers: {
        "Content-Type": "application/json",
        "Organization-Identifier": organizationIdentifier
      }
    })
    return response.data
  } catch (error) {
    throw error
  }
}