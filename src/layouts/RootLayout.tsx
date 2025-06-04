import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="font-sans antialiased">
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
