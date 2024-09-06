import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { ConfigProvider } from "antd";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#e5a55d",
            colorText: "#757575",
            fontFamily: "Poppins",
            controlHeight: 44,
            fontSize: 12,
          },
          components: {
            DatePicker: {
              activeBorderColor: "#e5a55d",
              hoverBorderColor: "#e5a55d",
              controlHeight: 44,
              fontSize: 12,
            },
            Input: {
              colorText: "#3D3D3D",
            },
            Collapse: {
              colorTextHeading: "var(--UI-UI200, #8B8B8B)",
            },
            Tabs: {
              itemColor: "var(--UI-UI200, #8B8B8B)",
            },
            Form: {
              labelColor: "#3D3D3D",
            },
            Modal: {
              contentBg: "#F7F7F7",
              borderRadiusLG: 20,
              paddingContentHorizontalLG: 28,
              paddingMD: 32,
              titleColor: "#3D3D3D",
              fontWeightStrong: 600,
              fontSize: 14,
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.08)",
            },
            Table: {
              colorBgContainer: "transparent",
              filterDropdownBg: "#fff",
              colorText: "#3D3D3D",
              fontWeightStrong: 500,
              colorPrimaryBg:
                "linear-gradient(180deg, #FA6E65 0%, #FF9D2A 100%)",
            },
            /* here is your global tokens */
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </StrictMode>
  );
}
