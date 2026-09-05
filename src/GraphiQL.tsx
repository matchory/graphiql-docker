import {explorerPlugin} from "@graphiql/plugin-explorer";
import {createGraphiQLFetcher} from "@graphiql/toolkit";
import {GraphiQL as Base} from "graphiql";

interface GraphiQLProps {
    url: string;
    headers: Record<string, string>;
}

export function GraphiQL({url, headers}: GraphiQLProps) {
    const explorer = explorerPlugin();
    const fetcher = createGraphiQLFetcher({url, headers});

    return (
        <Base fetcher={fetcher} plugins={[explorer]}/>
    );
}

export default GraphiQL;
