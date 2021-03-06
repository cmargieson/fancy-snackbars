# Fancy Snackbars

**Fancy Snackbars** manages a queue of Material-UI Snackbar notifications. Multiple notifications are queued and shown one after another.

## How to Use

**1.** Wrap your app inside a `SnackbarProvider` component.

```jsx
import { FancySnackbarProvider } from "fancy-snackbars";

<FancySnackbarProvider>
  <App />
</FancySnackbarProvider>;
```

**2.** Use `useFancySnackbar` hook in your functional components.

```javascript
import { useFancySnackbar } from "fancy-snackbars";

const MyButton = () => {
  const { queueFancySnackbar } = useFancySnackbar();

  const handleClick = () => {
    queueFancySnackbar("My message", "info");
  };

  return <button onClick={handleClick}>Show Fancy Snackbar</button>;
};
```

## Example App

To install packages run:

```console
npm install
```

To run the app in the development mode.<br />

```console
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
