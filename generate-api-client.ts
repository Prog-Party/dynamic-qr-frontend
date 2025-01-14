const { generateApi } = require("swagger-typescript-api")
const path = require("path")
const axios = require("axios")

const generate = async () => {
  try {
    await generateApi({
      name: "api.ts",
      output: path.resolve(process.cwd(), "./src/api/backend"),
      url: "https://dynamic-qrs.azurewebsites.net/api/swagger.json",
      // 'axios' or or 'fetch'
      httpClientType: "axios",
      generateClient: true,
      generateRouteTypes: true,
      generateResponses: true,
      extraTemplates: [],
      modular: true
    })

  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error generating API client:", error)
    process.exit(1)
  }
}

generate()