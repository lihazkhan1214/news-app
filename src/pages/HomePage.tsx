import React from "react";
import NewsList from "../features/news/NewsList";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{t("news")}</h1>
      <NewsList />
    </div>
  );
};

export default HomePage;
