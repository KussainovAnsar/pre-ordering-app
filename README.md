# pre-ordering-app
# Pre-Ordering App (Frontend)

This repository contains the frontend part of the **Pre-Ordering App**, a cross-platform application built with **React Native** and **Expo CLI**. The project allows users to pre-order food from cafés and restaurants, while providing restaurants with tools to manage their menus and orders.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: v16+)
- [Yarn](https://yarnpkg.com/) or npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (Install via `npm install -g expo-cli`)
- Android Studio (for Android development) or Xcode (for iOS development)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/KussainovAnsar/pre-ordering-app.git
   cd pre-ordering-app
   ```

2. **Install dependencies**
   ```sh
   npm install  # or yarn install
   ```

3. **Start the development server**
   ```sh
   npx expo start --clear  # or npm start
   ```
   This command ensures that the cache is cleared before running the project.

### Running the App

#### On Android:
1. Install the **Expo Go** app from the Play Store.
2. Start the project (`npx expo start --clear`).
3. Scan the QR code displayed in the terminal using the Expo Go app.
4. Alternatively, if using an emulator, run:
   ```sh
   npx expo run:android
   ```

#### On iOS:
1. Install the **Expo Go** app from the App Store.
2. Start the project (`npx expo start --clear`).
3. Scan the QR code using your iPhone’s camera or the Expo Go app.
4. If using an iOS simulator, run:
   ```sh
   npx expo run:ios
   ```

## Project Structure
```
pre-ordering-app/
│── auth/                  # Authentication screens (SignIn, SignUp)
│── components/            # Reusable UI components
│── navigation/            # App navigation setup
│── restaurant/            # Restaurant pages ([id].jsx for dynamic routing)
│── screens/               # Main app screens
│── styles/                # Global styles
│── App.js                 # Main entry point
│── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## Backend Setup
The backend should be implemented using:
- **Node.js + Express.js** for API development.
- **MongoDB** for database storage.
- **JWT Authentication** or Firebase Auth for user authentication.
- **Stripe/Kaspi/Freedom Pay** for payment processing.

**Example `.env` file for API connection:**
```sh
API_BASE_URL=https://your-backend-url.com/api
GOOGLE_API_KEY=your-google-api-key
STRIPE_PUBLIC_KEY=your-stripe-key
```

## Contributing
If you want to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request.

## Contact
For any questions, feel free to reach out!

