import Error from "next/error";
import { ReactElement } from "react";
import { AppContextProvider } from "../context/app.context";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar";

function Layout({ children }: LayoutProps) {
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
}

export const withLayout = (page: ReactElement) => (
    page.props.category !== undefined && page.props.menu
        ? (
            <AppContextProvider category={page.props.category} menu={page.props.menu}>
                <Layout>
                    {page}
                </Layout>
            </AppContextProvider>
        )
        : <Error statusCode={404} />
);
