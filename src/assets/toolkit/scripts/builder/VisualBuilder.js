import SiteStructureEnvironment from './environments/SiteStructureEnvironment';
import MaterialsEnvironment from './environments/MaterialsEnvironment';
import CustomizationEnvironment from './environments/CustomizationEnvironment';
import ActionEnvironment from './environments/ActionEnvironment';
import PageStructureEnvironment from './environments/PageStructureEnvironment';
import FrameApi from './../utils/FrameApi';

class VisualBuilder {
  constructor() {
    this.params();
    this.resolutionSwitcher();

    this.environments = new Map([
      ['site-structure', new SiteStructureEnvironment(this, 'site-structure')],
      ['page-structure', new PageStructureEnvironment(this, 'page-structure')],
      ['materials', new MaterialsEnvironment(this, 'materials')],
      ['customization', new CustomizationEnvironment(this, 'customization')],
      ['action', new ActionEnvironment(this, 'action')],
    ]);

    this.environmentSelector();

    // select first environment by default
    this.switchEnvironment('site-structure');
    $('.monster-environment-selector__environment-link')
      .first()
      .addClass('monster-environment-selector__environment-link--active');
    FrameApi.bindMessageListener(this);
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
      'materials': {},
      'groups': {},
      'stackable-container-class': 'monster-stackable-container',
      'new-block-url': '/monster/visual-builder/new-block',
    };
    for (const key in userSettings) {
      if (userSettings.hasOwnProperty(key)) {
        settings[key] = userSettings[key];
      }
    }
    this.settings = settings;
    this.$builder = $(this.settings['element-selector']);
    this.$stackable = $('.' + this.settings['stackable-container-class']);
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
      const environmentName = $(this).data('environmentName');
      if (that.currentEnvironment === environmentName) {
        $(this).toggleClass(activeModifier);
        that.environments.get(environmentName).$groupsPane.toggleClass('hidden');
        return false;
      }

      $sectionLinks.removeClass(activeModifier);
      that.switchEnvironment(environmentName);
      $(this).addClass(activeModifier);
      return false;
    });
  }

  switchEnvironment(environmentName) {
    this.environments.get(environmentName).activate();
    this.currentEnvironment = environmentName;
  }

  clearStackable() {
    this.$stackable.empty();
  }

  createStackablePane() {
    const paneClass = `${this.settings['stackable-container-class']}__pane`;
    const modifier = this.$stackable.find('.' + paneClass).length === 0 ? `${paneClass}--first` : '';
    const $newPane = $(`<div class="${paneClass} ${modifier}"></div>`);
    this.$stackable.append($newPane);
    return $newPane;
  }

  materialByName(name) {
    if (this.settings.materials.hasOwnProperty(name)) {
      return this.settings.materials[name];
    }
    return null;
  }

  get frameContentWindow() {
    return $(this.settings['frame-selector'])[0].contentWindow;
  }

  serialize() {
    FrameApi.sendMessage(this.frameContentWindow, 'serializeContent', ['log']);
  }

  log(result) {
    console.log(result);
  }
}

export default VisualBuilder;
