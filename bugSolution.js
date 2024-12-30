This solution uses `useEffect` and the `Layout` API in React Native. The `onLayout` event ensures the dimensions are accessed only after the layout is ready.  This approach is more robust than relying solely on `useEffect` which might be slightly less reliable during initial rendering.

**Example Code (bugSolution.js):**
```javascript
import React, { useState } from 'react';
import { Dimensions, View, Text, LayoutAnimation } from 'react-native';

const MyComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setWindowWidth(width);
  };

  return (
    <View onLayout={handleLayout}>
      <Text>Window Width: {windowWidth}</Text>
    </View>
  );
};

export default MyComponent;
```