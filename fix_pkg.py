# -*- coding: utf-8 -*-
import json
import io

with io.open('package.json', 'r', encoding='utf-8') as f:
    pkg = json.load(f)

if "postinstall" not in pkg["scripts"]:
    pkg["scripts"]["postinstall"] = "prisma generate"
    with io.open('package.json', 'w', encoding='utf-8') as f:
        json.dump(pkg, f, indent=2)
    print("Added postinstall to package.json")
else:
    print("postinstall already exists")

