class VisualBuilder {
  constructor() {
    this.params();
    this.resolutionSwitcher();
  }

  /**
   * Sets VisualBuilder settings.
   * Uses VisualBuilderSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.VisualBuilderSettings || {};
    const settings = {
      'element-selector': '.monster-visual-builder',
      'frame-selector': '.monster-visual-frame',
    };
    for (const key in userSettings) {
      if (userSettings.hasOwnProperty(key)) {
        settings[key] = userSettings[key];
      }
    }
    this.settings = settings;
    this.$builder = $(this.settings['element-selector']);
  }

  resolutionSwitcher() {
    const that = this;
    const bemBlock = 'resolution-switcher__resolution-link';
    const activeModifier = `${bemBlock}--active`;
    const $resolutionLinks = $(`.${bemBlock}`);
    $resolutionLinks.click(function callback() {
      $resolutionLinks.removeClass(activeModifier);
      $(that.settings['frame-selector']).width($(this).data('resolutionWidth'));
      $(this).addClass(activeModifier);
    });
  }
}

export default VisualBuilder;
