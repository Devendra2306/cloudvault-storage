import os
import re

def fix_colors(content):
    c = content
    
    # White text
    c = re.sub(r'color:\s*["\']#fff(?:fff)?["\']', 'color: "var(--text)"', c)
    c = re.sub(r'color:\s*["\']rgba\(255,\s*255,\s*255,\s*1\)["\']', 'color: "var(--text)"', c)
    
    # Borders
    c = re.sub(r'border:\s*["\']1px solid rgba\(255,\s*255,\s*255,\s*0?\.[0-9]+?\)["\']', 'border: "1px solid var(--border)"', c)
    c = re.sub(r'borderTop:\s*["\']1px solid rgba\(255,\s*255,\s*255,\s*0?\.[0-9]+?\)["\']', 'borderTop: "1px solid var(--border)"', c)
    c = re.sub(r'borderBottom:\s*["\']1px solid rgba\(255,\s*255,\s*255,\s*0?\.[0-9]+?\)["\']', 'borderBottom: "1px solid var(--border)"', c)
    c = re.sub(r'borderLeft:\s*["\']1px solid rgba\(255,\s*255,\s*255,\s*0?\.[0-9]+?\)["\']', 'borderLeft: "1px solid var(--border)"', c)
    c = re.sub(r'borderRight:\s*["\']1px solid rgba\(255,\s*255,\s*255,\s*0?\.[0-9]+?\)["\']', 'borderRight: "1px solid var(--border)"', c)
    c = re.sub(r'border-color:\s*rgba\(255,\s*255,\s*255,\s*0?\.[0-9]+\)', 'border-color: var(--border-hover)', c)

    # Backgrounds
    c = re.sub(r'background:\s*["\']rgba\(255,\s*255,\s*255,\s*0?\.(?:02|03|04|05|06|08|1|15|2)\)["\']', 'background: "var(--bg-card)"', c)
    c = re.sub(r'background:\s*["\']rgba\(0,\s*0,\s*0,\s*0?\.[234]\)["\']', 'background: "var(--bg-card)"', c)
    c = re.sub(r'background:\s*rgba\(255,\s*255,\s*255,\s*0?\.(?:02|03|04|05|06|08|1|15|2)\)', 'background: var(--bg-card)', c)
    
    # Text colors
    c = re.sub(r'color:\s*["\']#(?:a1a1aa|71717a|9ca3af|6b7280)["\']', 'color: "var(--text-muted)"', c)
    c = re.sub(r'color:\s*["\']#(?:e4e4e7|d4d4d8|f3f4f6)["\']', 'color: "var(--text-secondary)"', c)
    
    # Auth screen vars
    c = c.replace('var(--cv-bg-card)', 'var(--bg-card)')
    c = c.replace('var(--cv-surface-raised)', 'var(--surface-raised)')
    c = c.replace('var(--cv-border)', 'var(--border)')
    c = c.replace('var(--cv-text)', 'var(--text)')
    c = c.replace('var(--cv-text-muted)', 'var(--text-muted)')
    
    return c

total_replacements = 0
src_dir = 'cloudvault/frontend/src'

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js') or file.endswith('.css'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            new_content = fix_colors(content)
            
            if new_content != content:
                print(f"Updated {path}")
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                total_replacements += 1

print(f"Total files updated: {total_replacements}")
