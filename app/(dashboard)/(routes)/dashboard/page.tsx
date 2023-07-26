import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p className="text-6l text-green-500">Dashboar (Protected)</p>
    </>
  );
};

export default DashboardPage;
