import React from "react";
import { useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";

const Footer: React.FC = () => {
  const { current } = useAppSelector((state: RootState) => state.language);

  return (
    <footer className="bg-primary-light dark:bg-primary-dark py-4 mt-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-text-light dark:text-text-dark">
          {current === "en"
            ? "© 2024 News App. All rights reserved."
            : "© 2024 تطبيق الأخبار. جميع الحقوق محفوظة."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
