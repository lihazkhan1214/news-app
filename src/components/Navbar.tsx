import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleTheme } from "../features/theme/themeSlice";
import { setLanguage } from "../features/language/languageSlice";
import type { RootState } from "../app/store";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state: RootState) => state.theme);
  const { current } = useAppSelector((state: RootState) => state.language);

  return (
    <nav className="bg-primary-light dark:bg-primary-dark shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-text-light dark:text-text-dark"
          >
            {current === "en" ? "News App" : "تطبيق الأخبار"}
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {mode === "dark" ? "🌞" : "🌙"}
            </button>
            <button
              onClick={() =>
                dispatch(setLanguage(current === "en" ? "ar" : "en"))
              }
              className="p-2 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {current === "en" ? "عربي" : "English"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
