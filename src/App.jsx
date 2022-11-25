import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import WebFont from "webfontloader";
import { router } from "./Router/Router";

function App() {
  useEffect(() => {
    WebFont.load({
      custom: {
        families: ["BossaExtended", "Poppins", "PoppinsLight"],
        urls: ['./index.scss']

      }
    })
  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
