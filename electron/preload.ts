import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron", {
  ping: () => "pong",
});
