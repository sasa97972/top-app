import { NextRouter } from "next/router";

export const getParsedPathName = (router: NextRouter): string => {
    const params: string[] | undefined = router.pathname
        .match(/\[.+?]/g)
        ?.map((path) => path.replace(/[[\]]/g, ""));

    return params
        ? params.reduce(
            (result: string, param: string) => result.replace(`[${param}]`, router.query[param] as string),
            router.pathname,
        )
        : router.pathname;
};
