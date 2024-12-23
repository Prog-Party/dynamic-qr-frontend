import { constructUrl } from "@/api/ApiHelper";
import axios from "axios";

export const createCode = async (organizationIdentifier: string, value: string) => {

  try {
    const url = constructUrl("qr-codes")
    const data = {
      Value: value
    }
    const response = await axios.post(url, data, {
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