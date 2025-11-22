import dotenv from "dotenv";

// Carregar variáveis de ambiente
dotenv.config();

const PLACEHOLDER = "__EMPTY__";
const getEnv = (key: string, fallback?: string) => {
  const v = process.env[key];
  if (v === undefined) return fallback;
  if (v === PLACEHOLDER) return fallback;
  return v;
};

export const config = {
  server: {
    port: parseInt(getEnv("PORT", "3001") as string),
    env: getEnv("NODE_ENV", "development") as string,
    frontendUrl: getEnv("FRONTEND_URL", "http://localhost:3000") as string,
  },
  
  rateLimit: {
    windowMs: parseInt(getEnv("RATE_LIMIT_WINDOW_MS", "900000") as string), // 15 minutos
    max: parseInt(getEnv("RATE_LIMIT_MAX_REQUESTS", "100") as string),
  },
  
  security: {
    sessionSecret: getEnv("SESSION_SECRET", "change-this-in-production") as string,
  },
  
  cors: {
    origins:
      getEnv("NODE_ENV", "development") === "production"
        ? [getEnv("FRONTEND_URL", "http://localhost:3000") as string]
        : ["http://localhost:3000", "http://127.0.0.1:3000"],
  },
  
  json: {
    limit: "10mb",
  },
  
  app: {
    name: "Planeja-AI Backend",
    version: "1.0.0",
  },

  cookie: {
    refreshTokenName: getEnv("REFRESH_TOKEN_COOKIE_NAME", 'refreshToken') as string,
    secure:
      (getEnv("COOKIE_SECURE") === 'true') || getEnv("NODE_ENV", 'development') === 'production',
    sameSite: (getEnv("COOKIE_SAMESITE") as any) || (getEnv("NODE_ENV", 'development') === 'production' ? 'lax' : 'lax'),
    domain: getEnv("COOKIE_DOMAIN", undefined) as any,
    maxAgeDays: parseInt(getEnv("REFRESH_TOKEN_EXPIRY_DAYS", '7') as string)
  },

  supabase: {
    url: getEnv("SUPABASE_URL", "") as string,
    anonKey: getEnv("SUPABASE_ANON_KEY", "") as string,
    serviceRoleKey: getEnv("SUPABASE_SERVICE_ROLE_KEY", "") as string,
    dbPassword: getEnv("SUPABASE_DB_PASSWORD", "") as string,
  }
};

export default config;