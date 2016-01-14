/**
 * BemHelper is a JavaScript helper for BEM.
 * In most cases it's functions expect jQuery DOM element and operates it's css classes.
 */
class BemHelper {
  /**
   * Returns name of BEM block for specified jquery element.
   * Why not to take just css class? So, we can have an oldschool markup with non-bem classes.
   * As in such usecase we need to define if this is our content monster's block
   * we first check for data-bem-block HTML5 attribute.
   * If it is not set - return first CSS class.
   * Otherwise null returned.
   * If specified DOM element is a BEM element(not block) - null will be returned.
   * @param $object
   * @returns {string|null}
   */
  static blockName($object) {
    const dataBlock = $object.data('bemBlock') || null;
    if (dataBlock === null) {
      if (this.isBlock($object) === false) {
        return null;
      }
      const classes = this.objectClasses($object);
      return classes[0] || null;
    }
    return dataBlock;
  }

  /**
   * Returns name of block(string) for specified jquery element or false if it is BEM block
   * @param $object
   * @returns {string|boolean}
   */
  static elementBlock($object) {
    const classes = this.objectClasses($object);
    for (const className of classes) {
      const match = className.replace(/--.*$/, '').match(/__[\w\d\-]*/);
      if (match !== null) {
        return match[0];
      }
    }
    return false;
  }

  /**
   * Returns element block jquery element for specified jquery element.
   * In other words $object is `.foo__bar` and we are returning `.closest('.foo')`.
   * Returns null if this is not a BEM element.
   *
   * @param $object
   * @returns {Object|null}
   */
  static elementBlockObject($object) {
    const blockName = this.elementBlock($object);
    if (blockName === false) {
      return null;
    } else {
      return $object.closest(`.${blockName}`);
    }
  }

  /**
   * Returns if specified jquery element is BEM block
   * @param $object
   * @returns {boolean}
   */
  static isBlock($object) {
    const classes = this.objectClasses($object);
    for (const className of classes) {
      if (className.indexOf('__') > 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns names of matched modifiers for jquery element
   * @param $object
   * @returns {Array} Matched modifiers names
   */
  static appliedModifiers($object) {
    const classes = this.objectClasses($object);
    const matchedModifiers = [];

    for (const className of classes) {
      const match = className.match(/--[\w\d\-]*$/);
      if (match !== null) {
        matchedModifiers.push(match[0]);
      }
    }
    return matchedModifiers;
  }

  /**
   * Returns array of class names for specified jquery element
   * @param $object jQuery DOM element
   * @returns {Array}
   */
  static objectClasses($object) {
    const classes = $object.attr('class');
    if (typeof(classes) !== 'undefined') {
      return classes.split('/\s+');
    }

    return [];
  }
}

export default BemHelper;
