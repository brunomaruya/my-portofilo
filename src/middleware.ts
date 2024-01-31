import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "jp"],

  // Used when no locale matches
  defaultLocale: "jp",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(jp|en)/:path*"],
};
