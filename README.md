GraphiQL: Docker
================
> A Docker image for GraphiQL, a graphical interactive in-browser GraphQL IDE.

This Docker image provides a simple way to run GraphiQL, the interactive in-browser GraphQL IDE, using Docker. It is
designed to be easy to set up and use, allowing developers to quickly test and explore their GraphQL APIs.

## Usage

To run the GraphiQL Docker image, you can use the following command:

```bash
docker run \
      --port 8080:80 \
      --env GRAPHQL_ENDPOINT=http://localhost:4000/graphql \
  ghcr.io/matchory/graphiql
```

## Environment Variables

The following environment variables can be set to customize the GraphiQL instance:

- `GRAPHQL_ENDPOINT`: The URL of the GraphQL endpoint to connect to. Default is `http://localhost:4000/graphql`.

Yup, that's it for now. More to come. Have a suggestion for a configuration option? Create an issue.

## Contributing

If you have suggestions for improvements or want to contribute to this project, feel free to open an issue or submit a
pull request. To set up the project locally, you can clone the repository and run the following commands:

```bash
npm install

# Start the app with a mounted Caddyfile,
docker compose up

# ...or spin up the development server:
npm run dev
```
