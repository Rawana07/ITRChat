import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
export default function Page() {
  return <Card><form><Input placeholder="Name" /><Button type="submit">Submit</Button></form></Card>;
}