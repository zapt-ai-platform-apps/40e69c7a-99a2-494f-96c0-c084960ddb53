# Calorie Tracker

Track what you eat daily by logging your calorie intake.

Below is a set of journeys to help you understand and use this app.

1. [Landing Page](docs/journeys/landing-page.md) - Overview and primary call to action
2. [Login](docs/journeys/login.md) - Sign in to your account
3. [Sign Up](docs/journeys/signup.md) - Create an account
4. [Dashboard](docs/journeys/dashboard.md) - Track your calorie entries

## External Services

We do not use any external API calls for calorie tracking at this time.

## Required Environment Variables

The following environment variables must be defined in a file named ".env" at the project root:
- COCKROACH_DB_URL
- NPM_TOKEN
- VITE_PUBLIC_APP_ID
- VITE_PUBLIC_APP_ENV
- VITE_PUBLIC_SENTRY_DSN
- VITE_PUBLIC_UMAMI_WEBSITE_ID

## What This App Does

1. Provides a landing page describing the app's purpose.
2. Allows users to log in or sign up (for demo purposes, this uses local storage).
3. Lets users add daily calorie entries in a Dashboard section.

## Made on ZAPT

A "Made on ZAPT" badge is included in this app's interface, which links to https://www.zapt.ai.