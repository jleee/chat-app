# Slack Clone

Inspired by Slack, this project mimics the styling, layout, and functionality of Slack’s chat application.

## Demo

View the application at [https://slack.jeffreylee.dev/](https://slack.jeffreylee.dev/)

## Technologies Used

- React
- Material UI
- Styled Components
- Firebase Authentication
- Firebase Cloud Firestore

## Features

- Message in real-time
- Profanity filter applied to all messages
- User authentication
- Create new channels
- Delete channels
- Change app theme colour (default, light, dark)

## Firebase Setup

1. Duplicate `.env-example` and change the file name to `.env-local`
2. Head over to Firebase to create a new web app
3. Retrieve Firebase config settings and paste into .env-local
4. Headback to Firebase and go to Authentication -> Sign-in method. Enable Email/Password and Google as sign-in providers

## Project Setup Installation

```
git clone https://github.com/jleee/react-slack-clone.git
cd react-slack-clone
npm install
npm start
```
