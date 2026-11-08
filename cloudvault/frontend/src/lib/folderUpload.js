/**
 * Upload files from a folder picker (webkitRelativePath) creating folder structure as needed.
 */
export async function uploadWithFolderStructure(files, { createFolder, uploadFile, baseFolderId, onProgress }) {
  const list = Array.from(files || []);
  if (list.length === 0) return;
  const pathToFolderId = new Map([["", baseFolderId ?? null]]);

  const getParts = (file) => {
    const rawRel = (file.webkitRelativePath || file.name || "").replace(/\\/g, "/");
    const segments = rawRel
      .split("/")
      .map((s) => s.trim())
      .filter((s) => s && s !== "." && s !== "..");
    const fileName = segments.pop() || file.name || "unnamed";
    return { segments, fileName, rel: segments.concat(fileName).join("/") };
  };

  list.sort((a, b) => getParts(a).rel.localeCompare(getParts(b).rel));

  let done = 0;
  for (const file of list) {
    const { segments } = getParts(file);
    let parentId = baseFolderId ?? null;
    let acc = "";

    for (const segment of segments) {
      // Sanitize segment name
      const safeSegment = segment.replace(/[/\\:*?"<>|]/g, "_").slice(0, 100);
      acc = acc ? `${acc}/${safeSegment}` : safeSegment;
      if (!pathToFolderId.has(acc)) {
        const created = await createFolder(safeSegment, parentId);
        pathToFolderId.set(acc, created?.id || created?.data?.id || null);
      }
      parentId = pathToFolderId.get(acc);
    }

    await uploadFile(file, parentId);
    done += 1;
    onProgress?.(Math.round((done / list.length) * 100));
  }
}
