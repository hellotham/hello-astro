---
name: og-screenshot
description: Capture website screenshots sized precisely for OG images (1200x630) using chrome-devtools-mcp.
---

# Capture OG Image Screenshots (1200x630)

This skill provides instructions for taking screenshots of local or remote pages sized to standard Open Graph dimensions (1200x630).

## Prerequisites
- The `chrome-devtools-mcp` server must be active.
- A browser page must be open and loaded at the target URL.

## Step-by-Step Procedure

1. **Open/Select Page**: Ensure the target page is loaded in Chrome using `new_page` or `navigate_page`.
2. **Resize Window**: Call the `resize_page` tool with the exact viewport size:
   - `width`: 1200
   - `height`: 630
3. **Capture Viewport**: Call `take_screenshot` on the page:
   - `filePath`: Specify the absolute destination path for the `.png` file.
   - `fullPage`: `false` (only capture the resized 1200x630 viewport, do not scroll).
4. **Post-Process (Optional)**: Compress or convert the PNG output as needed.
