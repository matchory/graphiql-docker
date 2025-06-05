import {explorerPlugin} from "@graphiql/plugin-explorer";
import {createGraphiQLFetcher} from "@graphiql/toolkit";
import {GraphiQL as Base} from "graphiql";

const defaultUrl = "http://localhost:4000/graphql";

export function GraphiQL({url = defaultUrl}: { url?: string }) {
    const explorer = explorerPlugin();
    const fetcher = createGraphiQLFetcher({url});

    return (
        <Base fetcher={fetcher} plugins={[explorer]}/>
    );
}

export default GraphiQL;
