# Tube Crawlers

Have you had the idea for a perfect trip on the London Tube but nowhere to record it and share it?
Well, me neither. Though, it's a cool idea for a personal project that could teach me how to do things in NextJs.

So that's what this project is. If you come from the outside and think "what the hell is this guy doing here!?"
please just drop a line and I'll be happy to correct and learn from you.

## Running for Dev

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features - Todo List

- Log in - The user can log in to identify himself (TC-01)
  - ~~The user can log in and out~~
  - Ther user sees a welcome page when he is outside of the app and the home page when he is logged in. Top right there is a button to log out.
- Route Creation - The user can create a route and save it for later (TC-02)
- Route Browsing - The user can see a list of the routes published by other users (TC-03)
- Route Voting - The user can vote on the routes that he likes (TC-04)
  - Define a voting system, try to stay away from 1 to 10 ratings, imagine something more "fun" and "train related" and "on track"
