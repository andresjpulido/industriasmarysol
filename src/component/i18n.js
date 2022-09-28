import i18n from "i18next";  
import Backend from "i18next-xhr-backend";  
import LanguageDetector from "i18next-browser-languagedetector";  
i18n  
  .use(Backend)  
  .use(LanguageDetector)  
  .init({  
    fallbackLng: "es",
      
    debug: false,  
    react: {  
      bindI18n: "languageChanged",  
      bindI18nStore: "",  
      transEmptyNodeValue: "",  
      transSupportBasicHtmlNodes: true,  
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],  
      useSuspense: false  
    },
    backend: { 
      loadPath: '/locales/{{lng}}/translation.json'
    }  
  });  
  
export default i18n; 