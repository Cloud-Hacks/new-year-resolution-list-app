![n1](https://user-images.githubusercontent.com/94980910/147877638-075d51fb-9a94-4280-a5fd-2bfb78f54ec5.png)

![n2](https://user-images.githubusercontent.com/94980910/147877639-7711d4f3-4c1f-4794-b75e-83c4c04fed74.png)

## Inspiration
Inspired by Twilio API and its feats

## What it does
It allows to be able to  to create a ToDo list and enable you notify you on whatsapp

## How we built it
Our app is built upon react js on top of Twilio

## Challenges we ran into
Configuring Twilio
Fetching API calls

## Accomplishments that we're proud of
Twilio setup and its configurations

## What we learned
API calls and Twilio feats

## What's next for App
To setup our new pages and add other feats provided by Twilio like voice calls etc.

This is an example of sending message using React and Twilio. It consists of a `whatsappForm` component that communicates with a server endpoint to [send messages via the Twilio REST API](https://www.twilio.com/docs/).

To see how to build the project yourself, check out the blog post [How to send an message from React with Twilio](https://www.twilio.com/whatsapp).

## Running the project

To run the project you will need a Twilio account and a Twilio phone number that can send whatsapp messages. Gather your Twilio Account Sid and Auth Token from the [Twilio console](https://www.twilio.com/console) and the phone number.

Then, clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/Cloud-Hacks/hacky-greet-app.git
cd send-sms-react-twilio
npm install
```

Find the `.env` and fill in your Twilio credentials and phone number.

Start the application on its own with the command:

```bash
npm run dev
```

Open the app at [localhost:3000](http://localhost:3000). You can now use the form to send SMS messages via your Twilio number.
