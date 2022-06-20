import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import MainLayout from "../layout/MainLayout";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
