const ApolloClient = require('apollo-client').ApolloClient;
const createHttpLink = require("apollo-link-http").createHttpLink;
const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
const crossFetch = require('cross-fetch');
const gql = require('graphql-tag');

// TruStream Subgraph Endpoint to fetch verified telemetry
const TRUSTREAM_SUBGRAPH = "http://subgraph.iott.network:8000/subgraphs/name/iotex/pebble-subgraph";

// Create the GraphQL client
const Client = new ApolloClient({
    link: createHttpLink({
        uri: TRUSTREAM_SUBGRAPH,
        fetch: crossFetch
    }),
    cache: new InMemoryCache()
});

module.exports = exports = Client;