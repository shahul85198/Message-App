import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";



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
      <section className="HomePageSection">
      <h1 className="text-center text-6xl text-slate-900 mb-6">Chit-Chat</h1>
      <p className="text-center text-2xl text-slate-900">
        Have Your Best Chat
      </p>
      <p className="text-center text-lg text-slate-900">
        Fast Easy And Unlimites Team Chat
      </p>
      <button 
        className="w-40 rounded p-2 bg-slate-900 text-white ml-24 mt-4 hover:bg-slate-800"
        onClick={handleonclick}
          > 
        Get Started
      </button>
      </section>

  </div>;
};

export default Home;
