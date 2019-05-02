// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data"
    },
    seeds: {
      directory: "./data/seeds"
    },
    migrations: {
      directory: "./data.migrations"
    }
  }
};
