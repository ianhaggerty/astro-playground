// GraphQL
const url = `${import.meta.env.SUPABASE_URL}/graphql/v1`;
const apikey = import.meta.env.SUPABASE_KEY;

import { createClient } from "@urql/core";

const headers = {
  apikey,
  authorization: `Bearer: ${apikey}`,
};

export const client = createClient({ url, fetchOptions: { headers } });
