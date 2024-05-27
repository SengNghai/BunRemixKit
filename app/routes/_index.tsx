import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import Users from "~/components/Users";
import Navbars from "~/components/Navbars";

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
};

// This tells remix to load the "home" namespace
export const handle = { i18n: "home" };

export default function Index() {
  const { t } = useTranslation("home");
  return (
    <>
      <Navbars />
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <Users />
        <h1>{t("title")}</h1>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
