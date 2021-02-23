/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/data-requests/CurrentStockData.requests.ts":
/*!********************************************************!*\
  !*** ./src/data-requests/CurrentStockData.requests.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.calculateLatestStock = void 0;\nconst TransactionService = __webpack_require__(/*! ../services/TransactionService.service */ \"./src/services/TransactionService.service.ts\");\nconst StockService = __webpack_require__(/*! ../services/StockService.service */ \"./src/services/StockService.service.ts\");\nconst CurrentStockDataEnum_1 = __webpack_require__(/*! ../enums/CurrentStockDataEnum */ \"./src/enums/CurrentStockDataEnum.ts\");\nfunction updateStock(transactions, updatedStockValue) {\n    if (transactions) {\n        transactions.map((value) => {\n            if (value.type === CurrentStockDataEnum_1.Type.ORDER)\n                updatedStockValue -= value.qty;\n            if (value.type === CurrentStockDataEnum_1.Type.REFUND)\n                updatedStockValue += value.qty;\n        });\n    }\n    return updatedStockValue;\n}\nconst calculateLatestStock = (sku) => __awaiter(void 0, void 0, void 0, function* () {\n    const transactions = yield TransactionService.findTransactionsById(sku);\n    const { stock } = (yield StockService.findStockById(sku, false)) || { stock: 0 };\n    let updatedStockObject;\n    let updatedStockValue = stock;\n    updatedStockValue = updateStock(transactions, updatedStockValue);\n    updatedStockObject = { sku: sku, qty: updatedStockValue };\n    return updatedStockObject;\n});\nexports.calculateLatestStock = calculateLatestStock;\n\n\n//# sourceURL=webpack://plt-test/./src/data-requests/CurrentStockData.requests.ts?");

/***/ }),

/***/ "./src/data-requests/StockData.requests.ts":
/*!*************************************************!*\
  !*** ./src/data-requests/StockData.requests.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fetchStockById = exports.fetchStock = void 0;\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst ErrorHandler_error_1 = __webpack_require__(/*! ../utils/ErrorHandler.error */ \"./src/utils/ErrorHandler.error.ts\");\nconst stockFile = \"src/resources/stock.json\";\nconst fetchStock = () => __awaiter(void 0, void 0, void 0, function* () {\n    const content = fs.readFileSync(stockFile);\n    return JSON.parse(content.toString());\n});\nexports.fetchStock = fetchStock;\nconst fetchStockById = (sku, error) => __awaiter(void 0, void 0, void 0, function* () {\n    const content = fs.readFileSync(stockFile);\n    if (error)\n        ErrorHandler_error_1.throwError(content, sku, \"Stock\");\n    const stockData = JSON.parse(content.toString());\n    let filteredStock = null;\n    stockData.map((value) => {\n        if (sku === value.sku) {\n            filteredStock = value;\n        }\n    });\n    return filteredStock;\n});\nexports.fetchStockById = fetchStockById;\n\n\n//# sourceURL=webpack://plt-test/./src/data-requests/StockData.requests.ts?");

/***/ }),

/***/ "./src/data-requests/TransactionData.requests.ts":
/*!*******************************************************!*\
  !*** ./src/data-requests/TransactionData.requests.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fetchTransactionsById = exports.fetchTransactions = void 0;\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst ErrorHandler_error_1 = __webpack_require__(/*! ../utils/ErrorHandler.error */ \"./src/utils/ErrorHandler.error.ts\");\nconst transactionFile = \"src/resources/transactions.json\";\nconst fetchTransactions = () => __awaiter(void 0, void 0, void 0, function* () {\n    const content = fs.readFileSync(transactionFile);\n    return JSON.parse(content.toString());\n});\nexports.fetchTransactions = fetchTransactions;\nconst fetchTransactionsById = (sku) => __awaiter(void 0, void 0, void 0, function* () {\n    const content = fs.readFileSync(transactionFile);\n    ErrorHandler_error_1.throwError(content, sku, \"Transactions\");\n    const transactionData = JSON.parse(content.toString());\n    let filteredTransactionsData = [];\n    transactionData.map((value) => {\n        if (sku === value.sku)\n            filteredTransactionsData.push(value);\n    });\n    return filteredTransactionsData;\n});\nexports.fetchTransactionsById = fetchTransactionsById;\n\n\n//# sourceURL=webpack://plt-test/./src/data-requests/TransactionData.requests.ts?");

/***/ }),

/***/ "./src/enums/CurrentStockDataEnum.ts":
/*!*******************************************!*\
  !*** ./src/enums/CurrentStockDataEnum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Type = void 0;\nvar Type;\n(function (Type) {\n    Type[\"ORDER\"] = \"order\";\n    Type[\"REFUND\"] = \"refund\";\n})(Type = exports.Type || (exports.Type = {}));\n\n\n//# sourceURL=webpack://plt-test/./src/enums/CurrentStockDataEnum.ts?");

/***/ }),

/***/ "./src/enums/RoutesEnum.ts":
/*!*********************************!*\
  !*** ./src/enums/RoutesEnum.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Status = void 0;\nvar Status;\n(function (Status) {\n    Status[Status[\"OK\"] = 200] = \"OK\";\n    Status[Status[\"NOT_FOUND\"] = 404] = \"NOT_FOUND\";\n})(Status = exports.Status || (exports.Status = {}));\n\n\n//# sourceURL=webpack://plt-test/./src/enums/RoutesEnum.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst Routes_router_1 = __webpack_require__(/*! ./routes/Routes.router */ \"./src/routes/Routes.router.ts\");\ndotenv.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\nconst PORT = parseInt(process.env.PORT, 10);\nconst app = express();\nconst server = app.listen(PORT, () => {\n    console.log(`Listening on port ${PORT}`);\n});\n/**\n *  App Configuration\n */\napp.use(express.json());\napp.use(\"/plt-test\", Routes_router_1.router);\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\nexports.default = app;\n\n\n//# sourceURL=webpack://plt-test/./src/index.ts?");

/***/ }),

/***/ "./src/routes/Routes.router.ts":
/*!*************************************!*\
  !*** ./src/routes/Routes.router.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.router = void 0;\nconst express = __webpack_require__(/*! express */ \"express\");\nconst TransactionService = __webpack_require__(/*! ../services/TransactionService.service */ \"./src/services/TransactionService.service.ts\");\nconst StockService = __webpack_require__(/*! ../services/StockService.service */ \"./src/services/StockService.service.ts\");\nconst CurrentStockService = __webpack_require__(/*! ../services/CurrentStockService.service */ \"./src/services/CurrentStockService.service.ts\");\nconst RoutesEnum_1 = __webpack_require__(/*! ../enums/RoutesEnum */ \"./src/enums/RoutesEnum.ts\");\nexports.router = express.Router();\nexports.router.get(\"/fetch-transactions\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const transactions = yield TransactionService.findAllTransactions();\n        res.status(RoutesEnum_1.Status.OK).send(transactions);\n    }\n    catch (e) {\n        res.status(RoutesEnum_1.Status.NOT_FOUND).send(e.message);\n    }\n}));\nexports.router.get(\"/fetch-transactions/:valOne/:valTwo/:valThree\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const { valOne, valTwo, valThree } = req.params;\n    const sku = `${valOne}/${valTwo}/${valThree}`;\n    try {\n        const transactions = yield TransactionService.findTransactionsById(sku);\n        res.status(RoutesEnum_1.Status.OK).send(transactions);\n    }\n    catch (e) {\n        res.status(RoutesEnum_1.Status.NOT_FOUND).send(e.message);\n    }\n}));\nexports.router.get(\"/fetch-stock\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const stock = yield StockService.findAllStock();\n        res.status(RoutesEnum_1.Status.OK).send(stock);\n    }\n    catch (e) {\n        res.status(RoutesEnum_1.Status.NOT_FOUND).send(e.message);\n    }\n}));\nexports.router.get(\"/fetch-stock/:valOne/:valTwo/:valThree\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const { valOne, valTwo, valThree } = req.params;\n    const sku = `${valOne}/${valTwo}/${valThree}`;\n    try {\n        const stock = yield StockService.findStockById(sku, true);\n        res.status(RoutesEnum_1.Status.OK).send(stock);\n    }\n    catch (e) {\n        res.status(RoutesEnum_1.Status.NOT_FOUND).send(e.message);\n    }\n}));\nexports.router.get(\"/fetch-current-stock/:valOne/:valTwo/:valThree\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    const { valOne, valTwo, valThree } = req.params;\n    const sku = `${valOne}/${valTwo}/${valThree}`;\n    try {\n        const updatedStock = yield CurrentStockService.getUpdatedStockCount(sku);\n        res.status(RoutesEnum_1.Status.OK).send(updatedStock);\n    }\n    catch (e) {\n        res.status(RoutesEnum_1.Status.NOT_FOUND).send(e.message);\n    }\n}));\n\n\n//# sourceURL=webpack://plt-test/./src/routes/Routes.router.ts?");

/***/ }),

/***/ "./src/services/CurrentStockService.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/CurrentStockService.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getUpdatedStockCount = void 0;\nconst CurrentStockData_requests_1 = __webpack_require__(/*! ../data-requests/CurrentStockData.requests */ \"./src/data-requests/CurrentStockData.requests.ts\");\n/**\n * Service Methods GET Operations\n */\nconst getUpdatedStockCount = (sku) => __awaiter(void 0, void 0, void 0, function* () {\n    return yield CurrentStockData_requests_1.calculateLatestStock(sku);\n});\nexports.getUpdatedStockCount = getUpdatedStockCount;\n\n\n//# sourceURL=webpack://plt-test/./src/services/CurrentStockService.service.ts?");

/***/ }),

/***/ "./src/services/StockService.service.ts":
/*!**********************************************!*\
  !*** ./src/services/StockService.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.findStockById = exports.findAllStock = void 0;\nconst StockData_requests_1 = __webpack_require__(/*! ../data-requests/StockData.requests */ \"./src/data-requests/StockData.requests.ts\");\n/**\n * Service Methods GET Operations\n */\nconst findAllStock = () => __awaiter(void 0, void 0, void 0, function* () {\n    return yield StockData_requests_1.fetchStock();\n});\nexports.findAllStock = findAllStock;\nconst findStockById = (sku, error) => __awaiter(void 0, void 0, void 0, function* () {\n    return yield StockData_requests_1.fetchStockById(sku, error);\n});\nexports.findStockById = findStockById;\n\n\n//# sourceURL=webpack://plt-test/./src/services/StockService.service.ts?");

/***/ }),

/***/ "./src/services/TransactionService.service.ts":
/*!****************************************************!*\
  !*** ./src/services/TransactionService.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.findTransactionsById = exports.findAllTransactions = void 0;\nconst TransactionData_requests_1 = __webpack_require__(/*! ../data-requests/TransactionData.requests */ \"./src/data-requests/TransactionData.requests.ts\");\n/**\n * Service Methods GET Operations\n */\nconst findAllTransactions = () => __awaiter(void 0, void 0, void 0, function* () {\n    return yield TransactionData_requests_1.fetchTransactions();\n});\nexports.findAllTransactions = findAllTransactions;\nconst findTransactionsById = (sku) => __awaiter(void 0, void 0, void 0, function* () {\n    return yield TransactionData_requests_1.fetchTransactionsById(sku);\n});\nexports.findTransactionsById = findTransactionsById;\n\n\n//# sourceURL=webpack://plt-test/./src/services/TransactionService.service.ts?");

/***/ }),

/***/ "./src/utils/ErrorHandler.error.ts":
/*!*****************************************!*\
  !*** ./src/utils/ErrorHandler.error.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.throwError = void 0;\nconst throwError = (content, sku, caller) => {\n    if (!content.includes(sku)) {\n        throw new Error(JSON.stringify(`Error: The entry in ${caller} does not exist`));\n    }\n};\nexports.throwError = throwError;\n\n\n//# sourceURL=webpack://plt-test/./src/utils/ErrorHandler.error.ts?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://plt-test/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n\n\n//# sourceURL=webpack://plt-test/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?100":
/*!**********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?100 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.substr(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n\n\n//# sourceURL=webpack://plt-test/./node_modules/webpack/hot/poll.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("bf74cfe5320308b95c3c")
/******/ 	})();
/******/ 	
/******/ }
;