# MyBIAT

MyBIAT is a mobile banking application clone built with React Native and Expo. It replicates the core functionality and design of the BIAT Bank mobile app, providing a modern and responsive user interface.

## Features

- **Authentication**: Secure login screen.
- **Dashboard**: Overview of accounts and quick actions.
- **Accounts Management**: View account details and history.
- **Transfers**: Perform money transfers between accounts.
- **Cards Management**: View card details and manage limits.
- **Settings**: Application settings and profile management.
- **Notifications**: View alerts and notifications.

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **Navigation**: [React Navigation](https://reactnavigation.org/) (Stack & Bottom Tabs)
- **Icons**: [Lucide React Native](https://lucide.dev/guide/packages/lucide-react-native)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mybiat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npx expo start
```

- **Android**: Press `a` in the terminal (requires Android Studio or a connected device).
- **iOS**: Press `i` in the terminal (requires Xcode or a connected device).
- **Web**: Press `w` in the terminal.

## Project Structure

The source code is located in the `src` directory:

- `src/components`: Reusable UI components.
- `src/navigation`: Navigation configuration (Stack and Tab navigators).
- `src/screens`: Application screens (Login, Home, Accounts, etc.).
- `src/types`: TypeScript type definitions.
- `src/utils`: Utility functions.
