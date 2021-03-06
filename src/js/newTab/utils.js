/* Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

/**
 * Enum for classnames.
 * @enum {string}
 * @const
 */
const CLASSES_UTILS = {
  MAC: 'mac',                            // Applies MacOS specific properties.
  WIN: 'win',                            // Applies Windows specific properties.
  MOUSE_NAVIGATION: 'mouse-navigation',  // Removes blue focus ring.
};

/**
 * Alias for document.getElementById.
 * @param {string} id The ID of the element to find.
 * @return {Element} The found element or null if not found.
 */
export const getElem = (id) => {
  // eslint-disable-next-line no-restricted-properties
  return document.getElementById(id);
}

/**
 * Contains common functions used in the main NTP page and its iframes.
 */
const utils = {};

utils.CLASSES_UTILS = CLASSES_UTILS
/**
 * Disables the focus outline for |element| on mousedown.
 * @param {Element} element The element to remove the focus outline from.
 */
utils.disableOutlineOnMouseClick = function(element) {
  element.addEventListener('mousedown', () => {
    element.classList.add(CLASSES_UTILS.MOUSE_NAVIGATION);
    element.addEventListener('blur', () => {
      element.classList.remove(CLASSES_UTILS.MOUSE_NAVIGATION);
    }, {once: true});
  });
};

/**
 * Returns whether the given URL has a known, safe scheme.
 * @param {string} url URL to check.
 */
utils.isSchemeAllowed = function(url) {
  return url.startsWith('http://') || url.startsWith('https://') ||
      url.startsWith('ftp://') || url.startsWith('chrome-extension://');
};

/**
 * Sets CSS class for |element| corresponding to the current platform.
 * @param {Element} element The element to set the current platform.
 */
utils.setPlatformClass = function(element) {
  element.classList.toggle(
      CLASSES_UTILS.WIN, navigator.userAgent.indexOf('Windows') > -1);
  element.classList.toggle(
      CLASSES_UTILS.MAC, navigator.userAgent.indexOf('Mac') > -1);
};

/**
 * Returns a formatted localized string where $1 to $9 are replaced by the
 * second to the tenth argument. Any standalone $ signs must be escaped as
 * $$.
 * Copied from //ui/webui/resources/js/load_time_data.js temporarily as the
 * local NTP will be replaced by the WebUI NTP.
 * @param {string} label The label to substitute through.
 *     This is not an resource ID.
 * @param {...(string|number)} var_args The extra values to include in the
 *     formatted output.
 * @return {string} The formatted string.
 */
utils.substituteString = function(label, var_args) {
  const varArgs = arguments;
  return label.replace(/\$(.|$|\n)/g, function(m) {
    assert(m.match(/\$[$1-9]/), 'Unescaped $ found in localized string.');
    return m === '$$' ? '$' : varArgs[m[1]];
  });
};

export default utils;
