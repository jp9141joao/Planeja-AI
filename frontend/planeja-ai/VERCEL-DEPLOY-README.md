Vercel deployment (marcio-todolist)
=================================

This file explains how to deploy the `frontend/planeja-ai` Next.js app to Vercel.

Pre-requisites
-------------
- Node.js and npm installed locally
- A Vercel account and a personal token (create at https://vercel.com/account/tokens)

Quick deploy (one-shot)
-----------------------
1. From the repository root, export your token and the production API URL:

```bash
export VERCEL_TOKEN="<your-vercel-token>"
export NEXT_PUBLIC_API_URL="https://<your-backend>/api/v1"
```

2. Add public env variables to the Vercel project (these commands use the token and will create environment variables on the Vercel project):

```bash
npx vercel env add NEXT_PUBLIC_API_URL production "$NEXT_PUBLIC_API_URL" --token "$VERCEL_TOKEN"
npx vercel env add NEXT_PUBLIC_SUPABASE_URL production "<SUPABASE_URL>" --token "$VERCEL_TOKEN"
npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production "<SUPABASE_ANON_KEY>" --token "$VERCEL_TOKEN"
```

3. Deploy to production:

```bash
cd frontend/planeja-ai
npm install
npm run vercel:deploy
```

Notes
-----
- The `vercel.json` file in the project sets the project name to `marcio-todolist` and uses the `@vercel/next` builder.
- If you want automatic deployments from GitHub, connect the repository in the Vercel dashboard and set the environment variables in the project settings (Production branch -> main). Vercel will build and deploy on push.
- If you prefer me to run the deploy here, paste your Vercel token and confirm and I will run the commands and return the deployment URL.
