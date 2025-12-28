//const ENABLE_NETWORK_LOGS = __DEV__;

export const logger = {
  request: (method: string, url: string, body?: unknown) => {
   // if (!ENABLE_NETWORK_LOGS) return;

    console.log("➡️ [REQUEST]");
    console.log("Method:", method);
    console.log("URL:", url);
    if (body) console.log("Body:", body);
    console.log("-------------------------");
  },

  response: (url: string, status: number, data: unknown) => {
    //if (!ENABLE_NETWORK_LOGS) return;

    console.log("✅ [RESPONSE]");
    console.log("URL:", url);
    console.log("Status:", status);
    console.log("Data:", data);
  },

  error: (url: string, error: unknown) => {
    //if (!ENABLE_NETWORK_LOGS) return;

    console.log("❌ [ERROR]");
    console.log("URL:", url);
    console.log("Error:", error);
  },
};
