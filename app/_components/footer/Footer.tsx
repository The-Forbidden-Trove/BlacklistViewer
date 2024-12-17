"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex flex-col items-center justify-between gap-2 border-t bg-background px-4 py-4 sm:gap-0 md:flex-row">
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {t("ggg")}
      </p>

      <Button size={"icon"} variant={"outline"} asChild>
        <a
          href="https://github.com/The-Forbidden-Trove/BlacklistViewer"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </Button>
    </footer>
  );
}
