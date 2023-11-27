import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoleSelection from "./RoleSelection";
import SetUser from "./SetUser";
import UserPage from "./UserPage";
import "./App.css";
import AdminPage from "./AdminPage";

interface Test {
  active: boolean;
  title: string;
  type: string;
  change: string;
  users: number;
  clicked: number;
}

export const AppContext = createContext<{
  test: Test;
  setTest: React.Dispatch<React.SetStateAction<Test>>;
}>({
  test: {
    active: false,
    title: "",
    type: "",
    change: "",
    users: 0,
    clicked: 0,
  },
  setTest: () => {},
});

function App() {
  const [test, setTest] = useState<Test>({
    active: false,
    title: "Green",
    type: "Info Buttons",
    change: "",
    users: 181,
    clicked: 59,
  });

  const [role, setRole] = useState("user");

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider
          value={{
            test,
            setTest,
          }}
        >
          <RoleSelection role={role} setRole={setRole} />
          {/* when user is selected, then it shows form to input username */}
          {role === "user" ? (
            <>
              <SetUser />
              <UserPage />
            </>
          ) : (
            <AdminPage />
          )}
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
