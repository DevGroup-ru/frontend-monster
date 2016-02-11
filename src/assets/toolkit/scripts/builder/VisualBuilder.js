import StructureEnvironment from './environments/StructureEnvironment';
import MaterialsEnvironment from './environments/MaterialsEnvironment';
import CustomizationEnvironment from './environments/CustomizationEnvironment';
import ActionEnvironment from './environments/ActionEnvironment';

class VisualBuilder {
  constructor() {
    this.params();
    this.resolutionSwitcher();

    this.environments = new Map([
      ['structure', new StructureEnvironment(this, 'structure')],
      ['materials', new MaterialsEnvironment(this, 'materials')],
      ['customization', new CustomizationEnvironment(this, 'customization')],
      ['action', new ActionEnvironment(this, 'action')],
    ]);
    this.currentEnvironment = 'structure';
    this.environmentSelector();
    this.switchEnvironment(this.currentEnvironment);
    $('.monster-environment-selector__environment-link').first().addClass('monster-environment-selector__environment-link--active');
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
    const bemElem = 'resolution-switcher__resolution-link';
    const activeModifier = `${bemElem}--active`;
    const $resolutionLinks = $(`.${bemElem}`);
    $resolutionLinks.click(function callback() {
      $resolutionLinks.removeClass(activeModifier);
      $(that.settings['frame-selector']).width($(this).data('resolutionWidth'));
      $(this).addClass(activeModifier);
      return false;
    });
  }

  environmentSelector() {
    const that = this;
    const bemElem = 'monster-environment-selector__environment-link';
    const activeModifier = `${bemElem}--active`;
    const $sectionLinks = $(`.${bemElem}`);
    $sectionLinks.click(function callback() {
      $sectionLinks.removeClass(activeModifier);
      that.switchEnvironment($(this).data('environmentName'));
      $(this).addClass(activeModifier);
      return false;
    });
  }

  switchEnvironment(environmentName) {
    this.environments.get(environmentName).activate();
    this.currentEnvironment = environmentName;
  }
}

export default VisualBuilder;
