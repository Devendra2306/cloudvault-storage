import re
import os

files_to_fix = [
    'cloudvault/frontend/src/components/AuthScreen.jsx',
    'cloudvault/frontend/src/components/LandingPage.jsx',
    'cloudvault/frontend/src/components/ProfileMenu.jsx'
]

replacements = {
    # Hardcoded white text -> CSS var
    'color: "#fff"': 'color: "var(--text)"',
    "color: '#fff'": "color: 'var(--text)'",
    'color: "#ffffff"': 'color: "var(--text)"',
    
    # Hardcoded borders -> CSS var
    'border: "1px solid rgba(255,255,255,0.08)"': 'border: "1px solid var(--border)"',
    'border: "1px solid rgba(255,255,255,0.06)"': 'border: "1px solid var(--border)"',
    'border: "1px solid rgba(255,255,255,0.1)"': 'border: "1px solid var(--border)"',
    'borderBottom: "1px solid rgba(255,255,255,0.08)"': 'borderBottom: "1px solid var(--border)"',
    'borderTop: "1px solid rgba(255,255,255,0.08)"': 'borderTop: "1px solid var(--border)"',
    
    # Backgrounds
    'background: "rgba(0,0,0,0.2)"': 'background: "var(--bg-card)"',
    'background: "rgba(0,0,0,0.3)"': 'background: "var(--bg-card)"',
    'background: "rgba(255,255,255,0.05)"': 'background: "var(--bg-card)"',
    'background: "rgba(255,255,255,0.03)"': 'background: "var(--bg-card)"',
    'background: "rgba(255,255,255,0.02)"': 'background: "var(--bg-card)"',
    'background: "rgba(255,255,255,0.08)"': 'background: "var(--surface-raised)"',
    'background: "rgba(255,255,255,0.1)"': 'background: "var(--surface-raised)"',
    
    # Muted text
    'color: "#a1a1aa"': 'color: "var(--text-muted)"',
    'color: "#71717a"': 'color: "var(--text-muted)"',
    'color: "#e4e4e7"': 'color: "var(--text-secondary)"',
    'color: "#52525b"': 'color: "var(--text-muted)"',
    
    # Specific to AuthScreen
    'background: "#000"': 'background: "var(--bg-primary)"',
    'background: "#0a0a0a"': 'background: "var(--bg-primary)"',
    'color: "rgba(255,255,255,0.6)"': 'color: "var(--text-muted)"',
}

for filepath in files_to_fix:
    if not os.path.exists(filepath):
        continue
        
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    count = 0
    for old, new in replacements.items():
        if old in content and old != new:
            occurrences = content.count(old)
            content = content.replace(old, new)
            count += occurrences

    if count > 0:
        print(f"Fixed {count} hardcoded colors in {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
