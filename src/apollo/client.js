import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://auth-service-356996092654.us-central1.run.app/graphql', // Aquí defines el puerto del backend
  cache: new InMemoryCache(),
});

export default client;
