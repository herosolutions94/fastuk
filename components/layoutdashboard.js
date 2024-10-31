import SiteMaster from "./sitemaster";
import { useRouter } from "next/router";

import Footer from "./footer";
import DashHeader from "./dash_header";
export default function LayoutDashboard({ children }) {
  const router = useRouter();
  const path = router.pathname;
  if (path == "/dashboard/inbox") {
    return (
      <div className="content">
        <SiteMaster />
        <DashHeader />
        {children}
      </div>
    );
  } else {
    return (
      <div className="content">
        <SiteMaster />
        <DashHeader />
        {children}
        <Footer />
      </div>
    );
  }
}
