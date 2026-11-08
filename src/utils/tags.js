const sanitizeTag = (t) => {
  if (!t) return '';
  return String(t)
    .replace(/[\x00-\x1F\x7F]/g, '')
    .trim()
    .toLowerCase()
    .slice(0, 50);
};

const normalizeTags = (tags) => {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    return [...new Set(tags.map(sanitizeTag).filter(Boolean))].slice(0, 20);
  }
  if (typeof tags === 'string') {
    try {
      const parsed = JSON.parse(tags);
      return normalizeTags(parsed);
    } catch {
      return [...new Set(
        tags
          .split(',')
          .map(sanitizeTag)
          .filter(Boolean)
      )].slice(0, 20);
    }
  }
  return [];
};

const parseTagsField = (value) => normalizeTags(value);

module.exports = { normalizeTags, parseTagsField };
