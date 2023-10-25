import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Home from "../Layout/Home"
import Signup from '../Auth/Signup'
import Login from '../Auth/Login'
import ChatRoom from "../Chat/ChatRoom"

var AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component = {Home} />
                <Route path='/signup' component = {Signup} />
                <Route path='/login' component = {Login} />
                <Route path='/xhat-room' component = {ChatRoom} />
            </Switch>
        </div>
    )
}

export default AppRouter