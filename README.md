**Fancy Snackbars** is a library to manage a queue of Material-UI Snackbar notifications.

### How to use

**1.** Wrap your app inside a `SnackbarProvider` component.

```jsx
import { FancySnackbarProvider } from "fancy-snackbars";

<FancySnackbarProvider>
  <App />
</FancySnackbarProvider>;
```

**2.** Use `useFancySnackbar` hook in your functional components.

```javascript
import  { useFancySnackbar } from "fancy-snackbars";

const MyButton = () => {
  const { queueFancySnackbar } = useFancySnackbar();

  const handleClick = () => {
    queueFancySnackbar("My message", "info");
  };

  return <button onClick={handleClick}>Show Fancy Snackbar</button>;
};
```
