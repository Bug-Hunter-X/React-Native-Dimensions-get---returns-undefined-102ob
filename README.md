# React Native Dimensions.get() returns undefined

This repository demonstrates a common issue in React Native where `Dimensions.get('window')` or `Dimensions.get('screen')` returns `undefined` if accessed too early in the component's lifecycle.  This can lead to crashes or unexpected behavior.

## Problem

The `Dimensions` API doesn't immediately provide dimensions; it needs time to get the layout information. If you access `Dimensions.get()` before the layout is ready, you'll receive `undefined`.

## Solution

The solution involves using the `useEffect` hook to ensure the dimensions are fetched after the component mounts and the layout is available.  Event listeners can also be employed to handle dynamic dimension changes after the app renders. 

## How to Run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npx react-native run-android` (or `npx react-native run-ios`).