import { redirect } from "next/navigation"
import { signIn, providerMap } from "@/auth"
import { AuthError } from "next-auth"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const SIGNIN_ERROR_URL = "/error"

export default async function SignInPage(props: {
  searchParams: { callbackUrl: string | undefined }
}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Choose a provider to sign in</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {Object.values(providerMap).map((provider) => (
              <form
                key={provider.id}
                action={async () => {
                  "use server"
                  try {
                    await signIn(provider.id, {
                      redirectTo: props.searchParams?.callbackUrl ?? "",
                    })
                  } catch (error) {
                    if (error instanceof AuthError && "type" in error) {
                      return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                    }
                    throw error
                  }
                }}
              >
                <Button type="submit" variant="outline">
                  Sign in with {provider.name}
                </Button>
              </form>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
