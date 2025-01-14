const { generateApi } = require("swagger-typescript-api")
const path = require("path")
const axios = require("axios")

const generate = async () => {
  const response = await axios.get("https://dynamic-qrs.azurewebsites.net/api/swagger.json", {
    headers: {
      "Authorization": "Bearer YOUR_TOKEN_HERE",
      "Custom-Header": "CustomValue",
    },
  })

  try {
    await generateApi({
      name: "api.ts",
      output: path.resolve(process.cwd(), "./src/api/backend"),
      url: "https://dynamic-qrs.azurewebsites.net/api/swagger.json",
      spec: response.data,
      // 'axios' or or 'fetch'
      httpClientType: "axios",
      generateClient: true,
      generateRouteTypes: true,
      generateResponses: true,
      extraTemplates: [],
      modular: true,
      input: {
        headers: {
          "Authorization": "Bearer YOUR_TOKEN_HERE",
          "Custom-Header": "CustomValue",
        }
      },
      hooks: {
        // You can customize the generation process here
        onCreateComponent: (component: any) => {
          return component
        },
        onCreateRoute: (routeData: any) => {
          return routeData
        },

      },
    })

  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error generating API client:", error)
    process.exit(1)
  }
}

generate()