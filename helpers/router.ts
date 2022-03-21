import { NextRouter } from "next/router";

export const getParsedPathName = (router: NextRouter): string => {
    const params: string[] | null = router.pathname?.match(/(?<=\[).+?(?=])/g);
    return params
        ? params.reduce(
            (result: string, param: string) => result.replace(`[${param}]`, router.query[param] as string),
            router.pathname,
        )
        : router.pathname;
};
