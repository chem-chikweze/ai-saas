import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <p className="text-6l text-green-500">Hello AI Saas</p>
      <Button variant="destructive" size="lg">
        Click Me
      </Button>
    </>
  );
}
