"use client"

import { useTheme } from "next-themes"
import { Moon, Settings as SettingsIcon, Sun } from "lucide-react"
import { Globe } from "lucide-react"
import { useRouter, usePathname } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Settings() {
  const { resolvedTheme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const translate = useTranslations("Settings")

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const changeLanguage = (locale: "en" | "my") => {
    router.replace(pathname, { locale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="cursor-pointer gap-2 rounded-full">
          <SettingsIcon className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
          {translate("appearance")}
        </DropdownMenuLabel>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          onClick={toggleTheme}
          className="w-full cursor-pointer justify-start gap-2"
        >
          {resolvedTheme === "dark" ? (
            <>
              <Sun className="h-4 w-4" />
              <span>{translate("lightMode")}</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              <span>{translate("darkMode")}</span>
            </>
          )}
        </Button>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
          {translate("language")}
        </DropdownMenuLabel>
        <Button
          variant="ghost"
          onClick={() => changeLanguage("en")}
          className="w-full cursor-pointer justify-start gap-2"
        >
          <Globe className="h-4 w-4" />
          <span>{translate("english")}</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => changeLanguage("my")}
          className="w-full cursor-pointer justify-start gap-2"
        >
          <Globe className="h-4 w-4" />
          <span>{translate("myanmar")}</span>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
