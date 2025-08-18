# Pre-commit Hooks Guide

## Overview

This guide explains the colorful and meaningful pre-commit hooks in the Lenghak
monorepo. These hooks ensure code quality and provide delightful developer
experience with colorful terminal output.

## Terminal Color Support

The pre-commit hooks automatically detect terminal color support and gracefully
fall back to plain text when colors are not available.

### Automatic Color Detection

The hooks use intelligent color detection that works across different
environments:

- ✅ **Interactive terminals** (most development environments)
- ✅ **CI/CD environments** (GitHub Actions, GitLab CI, etc.)
- ✅ **Different terminal emulators** (iTerm2, Terminal.app, etc.)
- ✅ **SSH sessions** (with proper terminal setup)

### Testing Color Support

Run the color test script to verify your terminal setup:

```bash
./scripts/test-colors.sh
```

This will show:

- Whether your terminal supports colors
- Number of available colors
- Sample colored output
- Environment information

### Common Color Issues

#### 1. Raw Color Codes Displayed

If you see output like `\033[0;32m` instead of colored text:

**Solution**: The hook automatically detects this and disables colors. This is
normal for:

- Non-interactive shells
- Some CI/CD environments
- Terminal emulators without color support

#### 2. No Colors in CI/CD

**Expected behavior**: Colors are automatically disabled in CI/CD environments
to ensure compatibility.

#### 3. Colors Not Working in SSH

**Solution**: Ensure your SSH session has proper terminal setup:

```bash
# Connect with terminal type
ssh -t user@host

# Or set TERM variable
export TERM=xterm-256color
```

## Available Pre-commit Hooks

### 1. Basic Pre-commit Hook (`.husky/pre-commit`)

A simple but colorful pre-commit hook that runs Ultracite formatting.

**Features:**

- 🎨 Colorful terminal output (with fallback)
- ⏱️ Timing information
- 📊 File count statistics
- 💡 Helpful error messages
- 🚀 Success celebrations

**Output Example:**

```
🚀 Pre-commit hook starting...
⚙️ Running Ultracite formatter...
✅ Code formatting completed successfully!
✨ All files are now properly formatted
⏱️ Formatting took 2 seconds
📁 Formatted 5 staged file(s)
🚀 Pre-commit hook completed successfully!
```

### 2. Enhanced Pre-commit Hook (`.husky/pre-commit-enhanced`)

A comprehensive pre-commit hook with advanced features and detailed reporting.

**Features:**

- 🎨 Beautiful ASCII art banner (with fallback)
- 📊 Detailed file analysis
- ⏱️ Step-by-step timing
- 🔍 File type detection
- 📋 Success/failure summaries
- 💡 Helpful troubleshooting tips
- 🎉 Celebration messages

**Output Example:**

```
╔══════════════════════════════════════════════════════════════╗
║                    PRE-COMMIT HOOK                    ║
║              Lenghak Monorepo Quality Gate            ║
╚══════════════════════════════════════════════════════════════╝

🔍 Found 3 staged file(s) to process

🔨 Processing file types:
  • apps/web/src/pages/index.astro
  • packages/typescript/preact.json
  • .cursor/docs/preact-quick-reference.md

⚙️ Step 1: Running Ultracite formatter...
✅ ✓ Code formatting completed successfully!
✨ ✓ All files are now properly formatted
⏱️ Formatting took 1 seconds

╔══════════════════════════════════════════════════════════════╗
║                    SUCCESS SUMMARY                    ║
╚══════════════════════════════════════════════════════════════╝
⭐ All checks passed successfully!
🚀 Your code is ready to commit
⏱️ Total time: 1 seconds
📁 Processed 3 file(s)

🔍 Files being committed:
  • apps/web/src/pages/index.astro
  • packages/typescript/preact.json
  • .cursor/docs/preact-quick-reference.md

🔥 Happy coding! 🎉
```

## Color Scheme

The hooks use a consistent color scheme for better readability:

- **🔵 Blue**: Information and progress
- **🟢 Green**: Success and completion
- **🟡 Yellow**: Warnings and tips
- **🔴 Red**: Errors and failures
- **🟣 Purple**: File operations
- **🟢 Cyan**: Timing and statistics
- **⚪ White**: Main text content

## Emoji Usage

Emojis are used to make the output more engaging and easier to scan:

- 🚀 **Rocket**: Starting/completing processes
- ✅ **Check**: Success indicators
- ❌ **Error**: Failure indicators
- ⚙️ **Gear**: Processing steps
- ⏱️ **Clock**: Timing information
- ✨ **Sparkles**: Quality indicators
- 🔍 **Magnifying Glass**: File analysis
- 🔨 **Hammer**: File processing
- ⭐ **Star**: Success highlights
- 🔥 **Fire**: Celebration messages

## Installation and Setup

### 1. Make Hooks Executable

```bash
chmod +x .husky/pre-commit
chmod +x .husky/pre-commit-enhanced
```

### 2. Choose Your Hook

**For Simple Setup:**

```bash
# Use the basic hook (already active)
# .husky/pre-commit is the default
```

**For Enhanced Experience:**

```bash
# Replace with enhanced version
cp .husky/pre-commit-enhanced .husky/pre-commit
chmod +x .husky/pre-commit
```

### 3. Test the Hook

```bash
# Test color support
./scripts/test-colors.sh

# Test the demo output
./scripts/test-pre-commit.sh

# Test with actual files
git add .
git commit -m "test commit"
```

## Configuration Options

### Customizing Colors

You can modify the color variables in the hook scripts:

```bash
# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
BOLD='\033[1m'
NC='\033[0m' # No Color
```

### Adding More Checks

The enhanced hook includes commented sections for additional checks:

```bash
# Step 2: Run type checking (optional - uncomment if needed)
# print_colored "${BLUE}${GEAR} ${WHITE}Step 2: Running type checking...${NC}"
# TYPE_START=$(date +%s)
#
# if pnpm type-check; then
#     TYPE_END=$(date +%s)
#     TYPE_DURATION=$((TYPE_END - TYPE_START))
#     print_colored "${GREEN}${CHECK} ${WHITE}✓ Type checking passed!${NC}"
#     print_colored "${CYAN}${CLOCK} ${WHITE}Type checking took ${TYPE_DURATION} seconds${NC}"
# else
#     TYPE_END=$(date +%s)
#     TYPE_DURATION=$((TYPE_END - TYPE_START))
#     print_colored "${RED}${ERROR} ${WHITE}✗ Type checking failed!${NC}"
#     print_colored "${YELLOW}${WARNING} ${WHITE}Please fix the type errors and try again${NC}"
#     exit 1
# fi
```

## Troubleshooting

### Common Issues

1. **Hook Not Executing**

   ```bash
   # Check if hook is executable
   ls -la .husky/pre-commit

   # Make executable if needed
   chmod +x .husky/pre-commit
   ```

2. **Colors Not Showing**

   ```bash
   # Test color support
   ./scripts/test-colors.sh

   # Check terminal type
   echo $TERM

   # If colors don't work, the hook will still function
   ```

3. **Performance Issues**

   ```bash
   # The hook only processes staged files
   # Large files may take longer to format
   # Consider using .gitignore for build artifacts
   ```

4. **Raw Color Codes**
   ```bash
   # This is normal in some environments
   # The hook automatically detects and handles this
   # Colors will be disabled automatically
   ```

### Error Messages

The hooks provide helpful error messages:

```
❌ Code formatting failed!
⚠️ Please fix the formatting issues and try again
⏱️ Process took 3 seconds

💡 Helpful commands:
  • pnpm format - Format all files
  • pnpm format:unsafe - Apply aggressive fixes
  • pnpm lint - Check for linting issues
```

## Best Practices

### 1. Regular Commits

Make small, frequent commits to keep the pre-commit hook fast and effective.

### 2. Staging Strategy

Stage only the files you want to commit to avoid unnecessary processing.

### 3. Team Communication

Share the hook configuration with your team for consistent development
experience.

### 4. Performance Monitoring

Monitor the timing output to identify performance bottlenecks.

### 5. Color Support

- Test color support in your development environment
- Don't worry if colors don't work - the hook functions perfectly without them
- Colors are automatically disabled in CI/CD environments

## Integration with Other Tools

### Lint-staged

The hooks work well with lint-staged for selective processing:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,astro,vue,svelte,json,jsonc,css,scss,md,mdx}": [
      "ultracite format"
    ]
  }
}
```

### Turbo

The hooks integrate with Turbo for monorepo optimization:

```json
{
  "scripts": {
    "format": "turbo run format",
    "lint": "turbo run lint"
  }
}
```

## Future Enhancements

Potential improvements for the pre-commit hooks:

1. **Parallel Processing**: Run multiple checks simultaneously
2. **Caching**: Cache results for faster subsequent runs
3. **Custom Rules**: Allow project-specific validation rules
4. **Integration**: Add more tool integrations (ESLint, tests, etc.)
5. **Reporting**: Generate detailed reports for CI/CD
6. **Advanced Color Support**: Support for 256-color and true color terminals

This setup provides a delightful developer experience with clear, colorful
feedback that makes the development process more enjoyable and efficient.
