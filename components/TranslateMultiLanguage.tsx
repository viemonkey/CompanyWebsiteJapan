'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function TranslateMultiLanguage() {
  return (
    <Dropdown placement="bottom-end" className="bg-[#1a1a00] border border-amber-900/40 text-amber-50">
      <DropdownTrigger>
        <Button 
          isIconOnly 
          variant="light" 
          className="text-white hover:text-amber-500 transition-colors"
        >
          {/* Icon quả cầu trái đất SVG */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Languages" className="p-2">
        <DropdownItem key="vi" className="hover:!bg-amber-900/30 text-amber-100">Tiếng Việt</DropdownItem>
        <DropdownItem key="en" className="hover:!bg-amber-900/30 text-amber-100">English</DropdownItem>
        <DropdownItem key="ja" className="hover:!bg-amber-900/30 text-amber-100">日本語</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}