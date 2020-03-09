"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const fs = require("fs");

//read json file
let myJsonRaw = fs.readFileSync("./data-set/my-json.json");
let myJsonSchemaRaw = fs.readFileSync("./data-set/my-json-Schema.json");

//convert to object
let myJson = JSON.parse(myJsonRaw);
let myJsonSchema = JSON.parse(myJsonSchemaRaw);
const app = express();

//initialize http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
wss.on("connection", ws => {
  //send object as string format
  ws.send(JSON.stringify(myJson));
  ws.send(JSON.stringify(myJsonSchema));
});

//start server
server.listen(process.env.PORT || 4200, () => {
  console.log(`Server started!`);
});
//# sourceMappingURL=server.js.map
