"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL,
    logging: true,
    synchronize: false,
    entities: [path_1.default.join(__dirname, "./entities/**.{js,ts}")],
    migrations: [path_1.default.join(__dirname, "./migrations/**.{js,ts}")]
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map