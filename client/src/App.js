import { Route, Routes, Navigate } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import Logout from "./component/Logout";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Logout />} />}
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
