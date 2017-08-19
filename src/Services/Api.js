import { createPortal } from 'portals';

const BPGRoutes = "https://yaac7tr9s8.execute-api.us-west-2.amazonaws.com/dev";

const Api = createPortal({
  globals: {
    hostname: BPGRoutes
  }
});

export default Api;
