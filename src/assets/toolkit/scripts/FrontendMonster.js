import VisualBuilder from './builder/VisualBuilder';
import VisualFrame from './builder/VisualFrame';
import HashApi from './utils/HashApi';

class FrontendMonster {
  constructor() {
    this.params();
    this.visualBulder = null;
    this.hashApi = new HashApi();

    if (window.parent !== window && window.parent.FrontendMonster) {
      if (window.parent.FrontendMonster.hasBuilder) {
        this.VisualFrame = new VisualFrame();
      }
    }
  }

  /**
   * Returns VisualBuilder class instance
   * @returns VisualBuilder
   */
  get builder() {
    if (this.visualBulder === null) {
      this.visualBulder = new VisualBuilder();
    }
    return this.visualBulder;
  }

  /**
   * If this FrontendMonster instance has Visual Builder on page
   * @returns {boolean}
   */
  get hasBuilder() {
    return this.builder.$builder.length === 1;
  }

  /**
   * Sets FrontendMonster settings.
   * Uses FrontendMonsterSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.FrontendMonsterSettings || {};
    const settings = {};
    for (const key in userSettings) {
      if (userSettings.hasOwnProperty(key)) {
        settings[key] = userSettings[key];
      }
    }
    this.settings = settings;
  }
}

export default FrontendMonster;
