import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Home />

      <ToastContainer
        position="top-right"
        autoClose={2600}
        hideProgressBar
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="dark"
        toastStyle={{
          background: "#191919",
          color: "#ffffff",
          borderRadius: "6px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
        }}
      />
    </>
  );
};

export default App;