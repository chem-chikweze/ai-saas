import Image from "next/image";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <>
      <p className="text-6l text-green-500">
        Dashboar (Protected) Hello AI Saas
      </p>
      <Button variant="destructive" size="lg">
        Click Me
      </Button>
    </>
  );
};

export default DashboardPage;
