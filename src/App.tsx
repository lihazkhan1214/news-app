import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PostDetailsPage from "./pages/PostDetailsPage";
import { setTheme } from "./features/theme/themeSlice";

function AppContent() {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language);
  const theme = useAppSelector((state) => state.theme);

  // Handle language changes
  useEffect(() => {
    i18n.changeLanguage(language.current);
    document.documentElement.lang = language.current;
    document.documentElement.dir = language.current === "ar" ? "rtl" : "ltr";
  }, [language, i18n]);

  // Handle theme changes
  useEffect(() => {
    if (theme.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme.mode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches ? "dark" : "light"));
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id/:userid" element={<PostDetailsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
