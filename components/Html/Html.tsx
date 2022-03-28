import { Text } from "domhandler";
import parse, {
    attributesToProps,
    domToReact,
    Element,
    HTMLReactParserOptions,
} from "html-react-parser";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { IHtmlProps } from "./Html.props";

const options: HTMLReactParserOptions = {
    replace: (domNode) => {
        if (domNode instanceof Element) {
            switch (domNode.name) {
                case "h1":
                case "h2":
                case "h3":
                    return <Heading tag={domNode.name} {...attributesToProps(domNode.attribs)}>{domToReact(domNode.children, options)}</Heading>;
                case "p":
                    return <Paragraph size="l" {...attributesToProps(domNode.attribs)}>{domToReact(domNode.children, options)}</Paragraph>;
                default:
                    return domNode;
            }
        }

        if (domNode instanceof Text && !domNode.parent) {
            return <Paragraph size="l">{domNode.data}</Paragraph>;
        }

        return domNode;
    },
};

export function Html({ html }: IHtmlProps) {
    return <>{parse(html, options)}</>;
}
