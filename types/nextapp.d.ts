import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
};
