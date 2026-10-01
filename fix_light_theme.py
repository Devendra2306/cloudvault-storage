import re

with open('cloudvault/frontend/src/App.jsx', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

replacements = {
    # Hardcoded white text -> CSS var
    'color: "#fff"': 'color: "var(--text)"',
    "color: '#fff'": "color: 'var(--text)'",
    
    # Hardcoded sidebar borders -> CSS var
    'border: "1px solid rgba(255,255,255,0.08)"': 'border: "1px solid var(--border)"',
    'border: "1px solid rgba(255,255,255,0.06)"': 'border: "1px solid var(--border)"',
    'borderBottom: "1px solid rgba(255,255,255,0.04)"': 'borderBottom: "1px solid var(--border)"',
    'borderTop: "1px solid rgba(255,255,255,0.04)"': 'borderTop: "1px solid var(--border)"',
    'borderRight: "1px solid rgba(255,255,255,0.08)"': 'borderRight: "1px solid var(--border)"',
    
    # Hardcoded dark backgrounds that break in light mode
    'background: "rgba(0,0,0,0.2)"': 'background: "var(--bg-card)"',
    'background: "rgba(0,0,0,0.5)"': 'background: "rgba(0,0,0,0.5)"',  # keep overlay
    
    # Hardcoded muted text colors -> CSS var
    'color: "#a1a1aa"': 'color: "var(--text-muted)"',
    'color: "#71717a"': 'color: "var(--text-muted)"',
    'color: "#e4e4e7"': 'color: "var(--text-secondary)"',
    'color: "#52525b"': 'color: "var(--text-muted)"',
    'color: "#93c5fd"': 'color: "var(--accent-blue)"',
    'color: "#d4d4d8"': 'color: "var(--text-secondary)"',
    
    # Spinner border
    'border: `3px solid rgba(255,255,255,.15)`': 'border: `3px solid var(--border)`',
    
    # Subtle white overlays that become invisible in light mode
    'background: "rgba(255,255,255,0.05)"': 'background: "var(--bg-card)"',
    'background: "rgba(255,255,255,0.03)"': 'background: "var(--bg-card)"',
    'background: "rgba(255,255,255,0.02)"': 'background: "var(--bg-card)"',
    'border: "1px solid rgba(255,255,255,0.1)"': 'border: "1px solid var(--border)"',
    'border: "1px dashed rgba(255,255,255,0.1)"': 'border: "1px dashed var(--border)"',
    
    # Hover states
    'background: "rgba(255,255,255,0.06)"': 'background: "var(--bg-card-hover)"',
    'background: "rgba(255,255,255,.08)"': 'background: "var(--surface-raised)"',
}

count = 0
for old, new in replacements.items():
    if old in content and old != new:
        occurrences = content.count(old)
        content = content.replace(old, new)
        count += occurrences
        print(f"  Replaced {occurrences}x: {old[:50]}...")

print(f"\nTotal replacements: {count}")

with open('cloudvault/frontend/src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done!")
