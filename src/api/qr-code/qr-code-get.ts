import { constructUrl } from "@/api/ApiHelper"
import axios from "axios"

interface QrCodeGetResponse {
  IncludeMargin: boolean;
  BackgroundColor?: string;
  ForegroundColor?: string;
  ImageUrl?: string;
  ImageHeight?: number;
  ImageWidth?: number;
}

export const getCode = async (organizationIdentifier: string, qrCodeId: string) : Promise<QrCodeGetResponse> => {

  try {
    const url = constructUrl(`qr-codes/${qrCodeId}`)
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Organization-Identifier": organizationIdentifier
      }
    })
    return response.data as QrCodeGetResponse
  } catch (error) {
    throw error
  }
}
