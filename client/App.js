import AppNavigation from "./src/navigation";
import { UserProvider } from "./src/context/UserContext";
export default function App() {
  return (
    <>
      <UserProvider>
        <AppNavigation />
      </UserProvider>
    </>
  );
}
