import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body}>
				{ children }
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};
