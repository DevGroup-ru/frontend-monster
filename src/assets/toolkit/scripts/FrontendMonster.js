import VisualBuilder from './builder/VisualBuilder';

class FrontendMonster {
  construct() {
    this.params();
    this.visualBulder = new VisualBuilder();
  }

  /**
   * Returns VisualBuilder class instance
   * @returns VisualBuilder
   */
  get builder() {
    return this.visualBulder;
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
