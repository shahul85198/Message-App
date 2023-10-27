import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Button from "../Button";



var Home = () => {
   const {user} = useContext(AuthContext);
   var history = useHistory();

   var handleonclick = () => {
    if(user) {
      history.push('/chat-room');
    } else {
      history.push('/signup')
    }
   }



  return <div className="HomePageUI">
      <section className="HomePageSection text-center">
      <h1 className="text-6xl text-slate-900 mb-6">Chit-Chat</h1>
      <p className="text-2xl text-slate-900">
        Have Your Best Chat
      </p>
      <p className="text-lg text-slate-900 mb-4">
        Fast Easy And Unlimites Team Chat
      </p>
      <Button onClick={handleonclick} className='w-40'> 
        Get Started
      </Button>
      
      </section>

  </div>;
};

export default Home;
