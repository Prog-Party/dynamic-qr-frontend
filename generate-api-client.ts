const { generateApi } = require('swagger-typescript-api');
const path = require('path');

const generate = async () => {
  try {
    await generateApi({
      name: 'api.ts',
      output: path.resolve(process.cwd(), './src/api/backend'),
      url: 'https://dynamic-qrs.azurewebsites.net/api/swagger.json',
      httpClientType: 'axios', // or 'fetch'
      generateClient: true,
      generateRouteTypes: true,
      generateResponses: true,
      extraTemplates: [],
      modular: true,
      hooks: {
        // You can customize the generation process here
        onCreateComponent: (component: any) => {
          // console.log('Generated component:', component.name);
          return component;
        },
      },
    });

    console.log('API Client generated successfully!')
  } catch (error) {
    console.error('Error generating API client:', error)
    process.exit(1)
  }
};

generate();