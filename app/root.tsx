import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { ConfigProvider, theme, Spin, Flex } from "antd";
import "antd/dist/reset.css";
import { useState, useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const config = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorText: "#ffffff",
    },
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigProvider theme={config}>
          <Flex
            vertical={true}
            align="center"
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#292929",
            }}>
            {isLoading ? <Spin size="large" /> : <>{children}</>}
          </Flex>
        </ConfigProvider>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
