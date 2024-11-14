import Card from "@/app/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/complex">Default</Link>
      </div>
    </Card>
  );
}