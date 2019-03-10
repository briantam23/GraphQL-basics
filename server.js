const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const PORT = process.env.PORT || 4001;

const schema = require('./schema');
const root = require('./resolvers');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(PORT, () => console.log(`

        Running a GraphQL API server at 
        http://localhost:${PORT}/graphql"

`));
