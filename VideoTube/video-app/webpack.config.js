module.exports =
{
    resolve: {
        fallback: {
            "querystring": require.resolve("querystring-es3"),
            "zlib": require.resolve("browserify-zlib"),

            "async_hooks": false,
        },
        target: 'node',
        alias: { stream: "stream-browserify" }
    }

}