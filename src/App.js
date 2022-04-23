import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

const { Title } = Typography;

function App() {
	return (
		<div className="app">
			<Title style={{ textAlign: "center" }}>
				<span style={{ position: "relative", top: 4 }}>TODOS APP</span>
				❤️
			</Title>
			<Filters />
			<Divider />
			<TodoList />
		</div>
	);
}

export default App;
