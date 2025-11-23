# Zypher Web Research Agent  

A real-time web research agent built with **Zypher** (CoreSpeed) + **Claude Sonnet 4.5** + **Firecrawl MCP**.  
Zero custom tool code — pure agentic workflow using Zypher’s built-in MCP system.

Live demo: asks a question → autonomously searches the web → reasons → returns structured answer.

Perfect for gathering data into spreadsheets (Sheet1-style use cases).

https://github.com/Shamitha24/Zypher-Web-Research-Agent

## Features
- Interactive CLI with streaming responses  
- Real-time web search & scraping via Firecrawl MCP  
- Multi-step reasoning and tool calling (fully agentic)  
- Powered by the latest `claude-sonnet-4-5-20250929`  
- < 70 lines of code — clean and easy to extend

## Demo Video (1:30)
[Watch the agent in action →] 
(Shows live crypto/stock research with tool calls and final markdown table)

## Prerequisites
- Deno 2.0+ → https://deno.land
- Anthropic API key → https://console.anthropic.com
- Firecrawl API key (free tier) → https://www.firecrawl.dev

## Quick Start
```bash
# 1. Clone the repo
git clone https://github.com/Shamitha24/Zypher-Web-Research-Agent.git
cd Zypher-Web-Research-Agent

# 2. Copy example env
cp .env.example .env

# 3. Add your keys to .env (never commit real .env!)
#    ANTHROPIC_API_KEY=sk-ant-...
#    FIRECRAWL_API_KEY=fc-...

# 4. Run the agent
deno run -A --env main.ts
