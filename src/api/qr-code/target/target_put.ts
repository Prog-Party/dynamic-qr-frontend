import { constructUrl } from "@/api/ApiHelper"
import axios from "axios"

export const updateQrCodeTarget = async (organizationIdentifier: string, qrCodeId: string, targetValue: string) => {
  try {
    const url = constructUrl(`qr-code-targets/${qrCodeId}`)
    const response = await axios.put(url, targetValue, {
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
