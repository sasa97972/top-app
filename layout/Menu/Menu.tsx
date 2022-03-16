import { AppContext } from "../../context/app.context";
import { useContext } from "react";

export const Menu = () => {
	const { menu } = useContext(AppContext);

	return (
		<ul>
			{menu.map(item =>
				<li key={item._id.secondCategory}>{item._id.secondCategory}</li>
			)}
		</ul>
	);
};
