import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./Redux/appStore";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
