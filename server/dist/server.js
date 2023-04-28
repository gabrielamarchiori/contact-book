"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = __importDefault(require("./data-source"));
data_source_1.default.initialize()
    .then(() => {
    console.log("Database running");
    const PORT = process.env.PORT;
    app_1.default.listen(PORT, () => {
        console.log(`App is running!`);
    });
})
    .catch((err) => console.error(err));
//# sourceMappingURL=server.js.map