# LiftHouse (WIP)
A personal gym progress tracking react-native mobile application (mostly Android)

# Local Setup
## Prerequisite
* Node.js
* Java SE
* Android Studio
  * Android SDK
  * Android SDK Platform
  * Android Virtual Device
Follow [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) guide for Android: 
You could also try running this on iOS but this app was developed mainly for Android

## Run App
1. Go to project root and install npm packages `npm install`
2. Go to Android Studio and start an emulator 
3. Start the project by running `npm start`. This runs `Metro` for us
4. In a new terminal, run `npm run android` (or `npm run ios` if you're attempting to run this on iOS)

## Run Testing and Lint
* To perform tests, you can run the command `npm test`
* To perform lint checks, you can run the command `npm run-script lint`
