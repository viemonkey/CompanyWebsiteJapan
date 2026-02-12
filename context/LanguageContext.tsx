"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Danh sách mã quốc gia và ngôn ngữ tương ứng
const SUPPORTED_LANGUAGES: Record<string, string> = {
  "VN": "vi", // Việt Nam
  "JP": "ja", // Nhật Bản
  "FR": "fr", // Pháp
  "DE": "de", // Đức
  "ES": "es", // Tây Ban Nha
  "KR": "ko", // Hàn Quốc
  "TH": "th", // Thái Lan
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');
  // Biến dùng để chặn việc thực thi 2 lần (do React Strict Mode)
  const isInitialized = useRef(false);

  const forceGoogleTranslate = (lang: string) => {
    // 1. Xóa sạch cookie cũ để tránh xung đột
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + document.domain;
    
    /** * LƯU Ý: 
     * Nếu bạn viết code gốc bằng TIẾNG VIỆT, hãy để "/vi/${lang}"
     * Nếu bạn viết code gốc bằng TIẾNG ANH, hãy để "/en/${lang}"
     */
    const sourceLang = "vi"; 
    const cookieValue = `/${sourceLang}/${lang}`;
    document.cookie = `googtrans=${cookieValue}; path=/`;

    // 2. Tìm dropdown của Google Translate và kích hoạt sự kiện đổi ngôn ngữ
    const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = lang;
      googleCombo.dispatchEvent(new Event('change'));
    }
  };

  useEffect(() => {
    // Nếu đã chạy rồi thì thoát, không chạy lần 2 (Fix lỗi log lặp lại)
    if (isInitialized.current) return;
    isInitialized.current = true;

    const initLanguage = async () => {
      try {
        console.log("--- Bắt đầu phân tích vị trí (Chỉ chạy 1 lần) ---");
        
        // Gọi Cloudflare trace để lấy IP và mã quốc gia (loc)
        const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const text = await response.text();
        
        const data: any = {};
        text.split('\n').forEach(line => {
          const [key, value] = line.split('=');
          if (key) data[key] = value;
        });

        const countryCode = data.loc; 
        console.log("IP thuộc quốc gia:", countryCode);

        // Xác định ngôn ngữ đích (nếu không có trong danh sách thì mặc định tiếng Anh)
        const targetLang = SUPPORTED_LANGUAGES[countryCode] || 'en';
        console.log("Quyết định hiển thị ngôn ngữ chuẩn theo IP:", targetLang);

        setLocale(targetLang);

        // Fix lỗi SyntaxError: Kiểm tra tính hợp lệ trước khi lưu
        if (targetLang && targetLang !== "undefined") {
          localStorage.setItem('user-locale', targetLang);
          
          // Thực thi dịch ngay lập tức
          forceGoogleTranslate(targetLang);
          
          // Chạy lại sau 1 giây để chắc chắn script Google Translate đã sẵn sàng
          setTimeout(() => forceGoogleTranslate(targetLang), 1000);
        }

      } catch (error) {
        console.error("Lỗi xác định vùng miền, dùng mặc định tiếng Anh:", error);
        setLocale('en');
        forceGoogleTranslate('en');
      }
    };

    initLanguage();
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};