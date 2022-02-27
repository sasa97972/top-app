import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header/>
			<div>
				<Sidebar/>
				<main>
					{ children }
				</main>
			</div>
			<Footer/>
		</>
	);
};
