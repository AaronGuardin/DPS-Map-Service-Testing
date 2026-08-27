"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { navigation } from "@/config/navigation"
import Settings from "./Setting"
import Logo from "./Logo"
import Image from "next/image"

export function Navbar() {
  const translate = useTranslations("Navigation")
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {translate(item.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:block">
          <Settings />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  {translate(item.key)}
                </Link>
              ))}
            </nav>

            <div className="rounded-md text-sm font-medium hover:bg-muted">
              <Settings />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
