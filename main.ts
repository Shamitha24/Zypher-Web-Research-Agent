import {
  AnthropicModelProvider,
  createZypherContext,
  ZypherAgent,
  runAgentInTerminal,  // For interactive mode
} from "@corespeed/zypher";
import { eachValueFrom } from "rxjs-for-await";

function getRequiredEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

// 1. Create context
const zypherContext = await createZypherContext(Deno.cwd());

// 2. Create agent
const agent = new ZypherAgent(
  zypherContext,
  new AnthropicModelProvider({
    apiKey: getRequiredEnv("ANTHROPIC_API_KEY"),
  })
);

// 3. Register MCP server (Firecrawl for web crawling tools)
await agent.mcp.registerServer({
  id: "firecrawl",
  type: "command",
  command: {
    command: "npx",
    args: ["-y", "firecrawl-mcp"],
    env: {
      FIRECRAWL_API_KEY: getRequiredEnv("FIRECRAWL_API_KEY"),
    },
  },
});

// Option A: Interactive CLI mode (great for demo video)
console.log("Starting interactive Web Research Agent...");
await runAgentInTerminal(
  agent,
  "claude-sonnet-4-5-20250929"  // Your model—agentic powerhouse!
);

// Option B: One-shot task (uncomment to test non-interactive)
// const event$ = agent.runTask(
//   "Research the latest developments in AI agent frameworks like Zypher. Crawl relevant sites, summarize top 3 insights, and suggest how it could integrate with spreadsheet tools.",
//   "claude-sonnet-4-5-20250929"
// );
//
// for await (const event of eachValueFrom(event$)) {
//   console.log(event);
// }