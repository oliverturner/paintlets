
const widths = {
  nav: 40,
  content: 65,
};

const breakpoints = {
  medium: widths.content + widths.nav,
  large: widths.content + widths.nav * 2,
};

function getMQs() {
  const mqs = {};

  for (const [k, v] of Object.keys(breakpoints)) {
    const key = `--mq-${k}`;
    mqs[k] = `@media (min-width: ${v}ch)`;
  }

  return mqs;
}

/**
 * Turns a map of breakpoints into customMedia rules:
 * ```css
 * --mq-small: 496ch;
 * --mq-medium: 768ch;
 * ```
 * @param {[string, number][]} breakpointTable
 * @param {Record<string, string>} dict
 * @returns {Record<string, string>}
 */
function getCustomMedia(breakpointTable, dict = {}) {
  for (const [k, v] of breakpointTable) {
    dict["--mq-" + k] = `(min-width: ${v}ch)`;
  }

  return dict;
}

/**
 * Turns a map of breakpoints into Custom Properties:
 * ```css
 * --viewport-small: 496ch;
 * --viewport-medium: 768ch;
 * ```
 * @param {string} prefix
 * @param {[string, number][]} entries
 * @param {Record<string, string>} dict
 * @returns {Record<string, string>}
 */
function getCustomProps(prefix, entries, dict = {}) {
  for (const [k, v] of entries) {
    dict[`--${prefix}-` + k] = v + "ch";
  }

  return dict;
}

const breakpointTable = Object.entries(breakpoints);
const customMedia = getCustomMedia(breakpointTable);
const customProperties = {
  ...getCustomProps("width", Object.entries(widths)),
  ...getCustomProps("viewport", breakpointTable)
};

module.exports = {
  breakpoints,
  breakpointTable,
  customMedia,
  customProperties,
}
