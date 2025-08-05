import Profile from "@/app/components/profile/Profile"
import {
  Card,
  CardContent,
} from "@/components/ui/card"


export default function ProfilePage() {
  return (
    <Card className="w-full max-w-sm mx-auto lg:px-0 px-6">
      <CardContent>
       <Profile/>
      </CardContent>
    </Card>
  )
}
