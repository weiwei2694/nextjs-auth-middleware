import LoginForm from "@/components/forms/LoginForm"

const LoginPage = () => {
  return (
    <section>
        <h1 className="text-xl sm:text-3xl font-extrabold tracking-wider text-black">Login Form</h1>

        <div className="mt-8">
            <LoginForm />
        </div>
    </section>
  )
}

export default LoginPage