export const sanitizeUrl = (url) => url.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');

/**
 * Slugify a word or phrase by making it lowercase and replacing spaces with dashes.
 * @param {string} text
 * @returns {string}
 */
export const slugifyTitle = (text) => text.toLowerCase().trim().replace(/\s+/g, '-');