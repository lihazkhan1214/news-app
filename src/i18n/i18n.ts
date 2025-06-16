import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      news: "News",
      author: "Author",
      read_more: "Read more",
      home: "Home",
      details: "Details",
      switch_dark: "Switch to dark mode",
      switch_light: "Switch to light mode",
    },
  },
  ar: {
    translation: {
      news: "أخبار",
      author: "مؤلف",
      read_more: "اقرأ المزيد",
      home: "الصفحة الرئيسية",
      details: "تفاصيل",
      switch_dark: "التبديل إلى الوضع الليلي",
      switch_light: "التبديل إلى الوضع النهاري",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
