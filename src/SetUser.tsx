import { useContext } from "react";
import { AppContext } from "./App";

const SetUser = () => {
  const { setTest, test } = useContext(AppContext);

  const onSetUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!test.active) {
      return;
    }
    setTest((prevState) => ({
      ...prevState,
      users: prevState.users + 1,
    }));
  };

  return (
    <div>
      <form onSubmit={(e) => onSetUser(e)}>
        <input type="text" placeholder="username" />
        <button>Set User</button>
      </form>
    </div>
  );
};

export default SetUser;
