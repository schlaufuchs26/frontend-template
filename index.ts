import index from "./index.html";

Bun.serve({
  routes: {
    "/": index,

    "/api/health": {
      GET: () => Response.json({ status: "ok", uptime: process.uptime() }),
    },
  },

  development: {
    hmr: true,
    console: true,
  },

  port: 3000,
});

console.log("🦊 Server running at http://localhost:3000");
