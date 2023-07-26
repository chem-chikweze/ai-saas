import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p className="text-6l text-green-500">
        Dashboar (Protected) Hello AI Saas
      </p>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default DashboardPage;
