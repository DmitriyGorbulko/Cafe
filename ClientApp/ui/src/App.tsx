import "./App.css";
import { Registration } from "./components/Registration/Registration";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { PublicView } from "./PublicView";
import { PrivateView } from "./PrivateView";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Header } from "./components/Header/Header";
import { initAxios, setAuthHeaders } from "./api/api";
import { AxiosError } from "axios";

function App() {

  const auth = useAuth()
  initAxios((error: AxiosError) => {
    try {
      if (error && error.response?.status === 401) {
        console.warn("Error. Unauthorized. Probably token was expired.");
        // auth.logout();
      }
    } catch (err) {
      throw err;
    }
  });
	const { getItem } = useLocalStorage();

	const [token, setToken] = useState({} as string | null);

	useEffect(() => {
		const tok = getItem("token");
		setToken(tok);
    if(tok != null)
      setAuthHeaders(tok.split('"')[1])
	}, [token, getItem]);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			<Router>
				{!token ? (
					<PublicView />
				) : (
					<>
						<Header />
						<PrivateView />
					</>
				)}
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
