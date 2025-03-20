'use client'
import React from "react";
import { Button } from "@/components/ui/button"; 
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"; 

const Header: React.FC = () => {
  return (
    <header>
      <nav className="fixed w-full top-0 z-50 bg-[#05071B]/90 backdrop-blur-sm border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 text-white">
            <div className="flex items-center">
              <span className="text-xl font-bold">E-CLUB</span>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="hover:text-blue-400">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="hover:text-blue-400">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/events" className="hover:text-blue-400">
                    Events
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/gallery" className="hover:text-blue-400">
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/archive" className="hover:text-blue-400">
                    Archive
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/blogs" className="hover:text-blue-400">
                    Blogs
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-blue-600 text-white hover:bg-blue-500">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
