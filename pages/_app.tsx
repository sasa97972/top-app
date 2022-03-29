import Head from "next/head";
import { AppPropsWithLayout } from "../types/nextapp";

import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <>
            <Head>
                <title>Top Application</title>
                <meta name="description" content="Some description for app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {getLayout(<Component {...pageProps} />)}
        </>
    );
}
