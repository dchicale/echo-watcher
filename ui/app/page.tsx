import { auth } from "auth"
import DashboardPage from "./dashboard/page"
import LoginPage from "./auth/login/page"

export default async function Index() {
  const session = await auth()

  if (session) return (
    <div>
      <DashboardPage />
    </div>
  )

  return (
    <div>
      <LoginPage />
    </div>
  )
}
