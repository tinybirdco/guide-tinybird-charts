# Add Tinybird Charts to a Next.js frontend

This repo contains a minimal example demonstrating:

1. Creating Tinybird Charts from the UI
2. Integrating Tinybird Charts into a Next.js frontend

You can read more about Tinybird Charts in the [documentation](https://www.tinybird.co/docs/publish/charts), and there is a full [end-to-end guide](https://www.tinybird.co/docs/guides/integrate/integrate-charts-nextjs) covering this example.

## Run the example locally

### Prerequisites

- Node.js >= v18
- A [free Tinybird account](https://tinybird.co)
- Deploy the [Tinybird resources](/tinybird) to a Tinybird Workspace

### Install dependencies

Install app dependencies. From the root of the repo:

```bash
npm install
```

### Add your Tinybird parameters

First create a new file `.env.local`
```bash
cp .env.example .env.local
```

From the Tinybird UI, copy the read Token for the charts (if you deployed the resources from this repo, it will be called `CHART_READ_TOKEN`). Paste the Token into the `.env.local` file in your directory:

```bash
NEXT_PUBLIC_TINYBIRD_STATIC_READ_TOKEN="STATIC READ TOKEN"
```

### Run the demo app

Run it locally:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser.
