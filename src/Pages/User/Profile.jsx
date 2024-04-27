import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CardWithForm() {
  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 min-h-screen">
      <Card className="w-[550px] text-center">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>See your profile Here</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p className="text-sm font-medium leading-none">
            {userObj.username}
            <br />
            {userObj.email}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
