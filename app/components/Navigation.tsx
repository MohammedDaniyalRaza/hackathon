"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs"; // Import SignInButton

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navMenu = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Shop", path: "/products" },
    { id: 3, text: "Product", path: "/products" },
    { id: 4, text: "Pages", path: "/" },
    { id: 5, text: "About", path: "/about" },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto h-[74px] flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="md:flex hidden md:px-0 px-5">
          <ul className="flex items-center justify-center gap-10">
            {navMenu.map((item) => (
              <Link key={item.id} href={item.path} className="font-medium text-[14px] first:text-[#007580]">
                <li>{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="flex md:hidden items-center justify-center md:px-5">
          <Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
            <Button
              className="bg-[#ffffff] hover:bg-[#dfdfdf] text-black flex items-center gap-3 rounded-lg"
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon className="w-8 h-8" />
            </Button>
            <SheetContent className="flex flex-col items-center">
              <h1 className="text-3xl font-bold mb-10">Menu</h1>
              <div className="md:hidden flex">
                <ul className="flex flex-col items-center justify-center gap-10">
                  {navMenu.map((item) => (
                    <Link
                      key={item.id}
                      href={item.path}
                      className="font-medium text-[14px]"
                      onClick={() => setIsOpen(false)}
                    >
                      <li>{item.text}</li>
                    </Link>
                  ))}
                </ul>
              </div>

              {/* Clerk Authentication in Mobile Menu */}
              <div className="mt-5">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button className="bg-[#029FAE] text-white px-4 py-2">Sign In</Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Right Side (Authentication + Contact Info) */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-[#029FAE] text-white px-4 py-2">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <p className="text-[14px] text-[#636270] font-medium md:px-0 px-5">
            Contact: <span className="text-[#272343]">(808) 555-0111</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;