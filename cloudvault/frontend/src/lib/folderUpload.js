/**
 * Upload files from a folder picker (webkitRelativePath) creating folder structure as needed.
 */
export async function uploadWithFolderStructure(files, { createFolder, uploadFile, baseFolderId, onProgress }) {
  const list = Array.from(files);
  const pathToFolderId = new Map([["", baseFolderId ?? null]]);

  const getParts = (file) => {
    const rel = file.webkitRelativePath || file.name;
    const segments = rel.split("/").filter(Boolean);
    const fileName = segments.pop();
    return { segments, fileName, rel };
  };

  list.sort((a, b) => getParts(a).rel.localeCompare(getParts(b).rel));

  let done = 0;
  for (const file of list) {
    const { segments } = getParts(file);
    let parentId = baseFolderId ?? null;
    let acc = "";

    for (const segment of segments) {
      acc = acc ? `${acc}/${segment}` : segment;
      if (!pathToFolderId.has(acc)) {
        const created = await createFolder(segment, parentId);
        pathToFolderId.set(acc, created.id);
      }
      parentId = pathToFolderId.get(acc);
    }

    await uploadFile(file, parentId);
    done += 1;
    onProgress?.(Math.round((done / list.length) * 100));
  }
}
