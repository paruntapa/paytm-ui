import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Button } from "../components/Button"
import { User } from "../components/User"

export const Dashboard = () =>{
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"10,000"}/>
            <User to={"/send"}/>
        </div>
    </div>
}