import * as React from "react";
import { useHistory } from "react-router-dom";
const Compose: React.FC<ComposeProps> = (props) => {
  const [username, setUsername] = React.useState("");
  const [message, setMessage] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch('/api/chirps', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, message})
    })
    history.push("/");
  };

  return (
    <>
      <h1>Compose</h1>
      <form>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

interface ComposeProps {}

export default Compose;
