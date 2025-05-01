import { auth } from "auth"
import LoginPage from "./login/page"
import DashboardPage from "./dashboard/page"

export default async function Index() {
  const session = await auth()

  if (session) return (
    <div>
      <DashboardPage />
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>)

  return (
    <div>
      <LoginPage />
    </div>
  )
}
