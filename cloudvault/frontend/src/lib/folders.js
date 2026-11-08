export function buildFolderTree(flatFolders) {
  if (!Array.isArray(flatFolders)) return [];
  const map = new Map(flatFolders.map((f) => [f.id, { ...f, children: [] }]));
  const roots = [];

  for (const f of flatFolders) {
    const node = map.get(f.id);
    if (!node) continue;

    // Guard against self-reference cycle
    if (f.parentId && f.parentId !== f.id && map.has(f.parentId)) {
      map.get(f.parentId).children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

export function isDescendant(flatFolders, ancestorId, checkFolderId) {
  if (!Array.isArray(flatFolders) || !ancestorId || !checkFolderId) return false;
  if (ancestorId === checkFolderId) return true;

  const folderMap = new Map(flatFolders.map((f) => [f.id, f]));
  let current = folderMap.get(checkFolderId);
  const visited = new Set();

  while (current && current.parentId && !visited.has(current.id)) {
    visited.add(current.id);
    if (current.parentId === ancestorId) return true;
    current = folderMap.get(current.parentId);
  }
  return false;
}

export function getFolderAncestors(flatFolders, folderId) {
  if (!Array.isArray(flatFolders) || !folderId) return [];
  const folderMap = new Map(flatFolders.map((f) => [f.id, f]));
  const path = [];
  const visited = new Set();
  let current = folderMap.get(folderId);

  while (current && !visited.has(current.id)) {
    visited.add(current.id);
    path.unshift(current);
    current = current.parentId ? folderMap.get(current.parentId) : null;
  }
  return path;
}
