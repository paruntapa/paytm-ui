import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"
import { WarningButton } from "../components/WarningButton"

export const Signup = () => {
    return <>
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="font-bold pt-6 text-3xl">
    <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"}/>
        <SubHeading label={"Enter your information to create an account"}/>
        <InputBox placeholder={"Anuj"} label={"First Name"}/>
        <InputBox placeholder={"Sundola"} label={"Last Name"}/>
        <InputBox placeholder={"ilovemakima"} label={"Password"}/>
        <div>
        <Button label={"Sign Up"}/>
        </div>
        <WarningButton label={"Existing user?"} buttontext={"Sign in"} to={"/signin"}/>
    </div>
    </div>
    </div>
    </div>   
    </>
}