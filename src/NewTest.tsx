import { useContext } from "react";
import { AppContext } from "./App";
import TestForm from "./TestForm";

const NewTest = () => {
  const { setTest, test } = useContext(AppContext);

  return (
    <div>
      {test.active ? (
        <button
          onClick={() =>
            setTest((prevState) => ({
              ...prevState,
              active: false,
            }))
          }
          className="test-button"
        >
          Stop Test
        </button>
      ) : (
        <TestForm />
      )}
    </div>
  );
};

export default NewTest;
