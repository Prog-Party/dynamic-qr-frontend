import { constructUrl } from "@/api/ApiHelper"
import axios from "axios"

export const getQrCodeHistory = async (organizationIdentifier: string, qrCodeId: string) => {
  try {
    const url = constructUrl(`qr-codes/${qrCodeId}/history`)
    const response = await axios.get(url, {
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