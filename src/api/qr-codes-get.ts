import { constructUrl } from "@/api/ApiHelper";
import axios from "axios";

export interface QrCodesGetResponse {
  Id: string;
  IncludeMargin: boolean;
  BackgroundColor?: string;
  ForegroundColor?: string;
  ImageUrl?: string;	
  ImageHeight?: number;
  ImageWidth?: number;
}

export const getCodes = async (organizationIdentifier: string) : Promise<QrCodesGetResponse[]> => {

  try {
    const url = constructUrl("qr-codes")
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Organization-Identifier": organizationIdentifier
      }
    })
    return response.data as QrCodesGetResponse[]
  } catch (error) {
    throw error
  }
}