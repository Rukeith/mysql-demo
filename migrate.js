const Umzug = require("umzug");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const conf = require(__dirname + "/config/config.json")[env];

const sequelize = new Sequelize(
  conf.database,
  conf.username,
  conf.password,
  {
    host: conf.host,
    dialect: "mysql",
    pool: {
      max: 1,
      min: 0,
      idle: 10000
    }
  }
);

sequelize.authenticate()
.then(() => {
  const umzug = new Umzug({
    storage: "sequelize",
    storageOptions: {
      sequelize: sequelize
    },
    migrations: {
      params: [
        sequelize.getQueryInterface(),
        sequelize.constructor,
        conf
      ],
      path: "./migrations",
      pattern: /\.js$/
    },
    logging: () => console.log.apply(null, arguments),
  });
  
  const migration = function() {
    umzug.up()
    .then((migrations) => {
      console.log(migrations.map(migration => migration.file));
      return process.exit(0);
    })
    .catch((err) => {
      console.error('Migration failed !!!', err);
      return process.exit(1);
    });
  };
  console.log('Connected !!!!!!!!!!!');
  migration();
})
.catch(error => console.error('Connecting error ===', error));