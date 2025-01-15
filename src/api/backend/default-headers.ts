import { User } from "@auth0/auth0-spa-js"

export function getDefaultHeaders(user: User | undefined): Record<string, string> {

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "x-functions-key": process.env.BACKEND_KEY_QUERY || ""
  }

  const customerIdentifier = user?.nickname
  const organizationIdentifier = user?.organizationId

  if (customerIdentifier) {
    headers["Customer-Identifier"] = customerIdentifier
  }

  if (organizationIdentifier) {
    headers["Organization-Identifier"] = organizationIdentifier
  }

  return headers
}