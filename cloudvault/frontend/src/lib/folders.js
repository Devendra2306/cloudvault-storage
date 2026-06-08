export function buildFolderTree(flatFolders) {
  const map = new Map(flatFolders.map((f) => [f.id, { ...f, children: [] }]));
  const roots = [];
  for (const f of flatFolders) {
    const node = map.get(f.id);
    if (f.parentId && map.has(f.parentId)) {
      map.get(f.parentId).children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}
