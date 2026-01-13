# Skills vs. MCPs: You Need Both

## The Short Answer
**You need both.** The skills do **not** replace the MCPs.

## The Analogy: Chef & Kitchen

Think of Cyrus as a Chef.

1.  **The MCP (Model Context Protocol)** is the **Kitchen**.
    *   It provides the raw tools: The Stove, The Knife, The Ingredients.
    *   *Without the MCP*, the Chef is in an empty room. They can't cook anything because they have no tools.
    *   **In your case:** The `supabase-mcp` gives Cyrus the ability to actually *connect* to the database and run queries.

2.  **The Skill** is the **Recipe Book**.
    *   It tells the Chef *how* to make a specific dish (e.g., "How to Reset a Password").
    *   *Without the Skill*, the Chef has a kitchen but doesn't know how to cook the specific meal you want. They might guess, but it might be wrong.
    *   **In your case:** The `supabase-auth` skill tells Cyrus the exact best-practice SQL commands to safely manage users.

## Summary Table

| Component | Role | Example |
| :--- | :--- | :--- |
| **MCP** | **The Tool** (Execution) | `n8n-mcp`: "I can send a POST request to this URL." |
| **Skill** | **The Knowledge** (Instruction) | `n8n-workflow-patterns`: "Here is the JSON structure you need to send to create a valid workflow." |

## Action Required
You must have the MCPs configured (in `mcp_config.json` or `.mcp.json`) for the Skills to work. The Skills will then *use* those MCPs to do their job.
