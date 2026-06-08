const normalizeTags = (tags) => {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    return [...new Set(tags.map((t) => String(t).trim().toLowerCase()).filter(Boolean))].slice(0, 20);
  }
  if (typeof tags === 'string') {
    try {
      const parsed = JSON.parse(tags);
      return normalizeTags(parsed);
    } catch {
      return tags
        .split(',')
        .map((t) => t.trim().toLowerCase())
        .filter(Boolean)
        .slice(0, 20);
    }
  }
  return [];
};

const parseTagsField = (value) => normalizeTags(value);

module.exports = { normalizeTags, parseTagsField };
