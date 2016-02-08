class VisualBuilder {
  construct() {
    this.params();
  }

  /**
   * Sets VisualBuilder settings.
   * Uses VisualBuilderSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.VisualBuilderSettings || {};
    const settings = {
      'element-selector': '.visual-builder',
    };
    for (const key in userSettings) {
      if (userSettings.hasOwnProperty(key)) {
        settings[key] = userSettings[key];
      }
    }
    this.settings = settings;

  }
}

export default VisualBuilder;
