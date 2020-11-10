/** @format */

import fetch from "node-fetch";

import { createHttpLink } from "apollo-link-http";
import clientConfig from "./../client-config";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
	link: createHttpLink({ uri: clientConfig.graphqlUrl }),
	fetch: fetch,
	cache: new InMemoryCache(), 
});

export default client;
