const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "books", deps: []
 * createTable() => "comments", deps: [books]
 *
 */

const info = {
  revision: 1,
  name: "model",
  created: "2023-03-18T17:22:54.507Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "books",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        title: { type: Sequelize.STRING, field: "title", allowNull: false },
        author: { type: Sequelize.STRING, field: "author", allowNull: false },
        about_author: {
          type: Sequelize.TEXT,
          field: "about_author",
          allowNull: true,
        },
        review: { type: Sequelize.TEXT, field: "review", allowNull: false },
        price: { type: Sequelize.STRING, field: "price", allowNull: false },
        rating: { type: Sequelize.STRING, field: "rating", allowNull: false },
        picture: { type: Sequelize.STRING, field: "picture", allowNull: true },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "comments",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        comment: { type: Sequelize.TEXT, field: "comment", allowNull: false },
        book_id: { type: Sequelize.INTEGER, field: "book_id" },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        bookId: {
          type: Sequelize.INTEGER,
          field: "bookId",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "books", key: "id" },
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["books", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["comments", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
