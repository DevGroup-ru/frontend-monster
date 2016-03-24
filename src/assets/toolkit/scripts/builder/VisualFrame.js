import FrameApi from './../utils/FrameApi';

class VisualFrame {
  constructor() {
    this.params();
    this.initialize();
  }

  initialize() {
    FrameApi.bindMessageListener(this);

    this.parentWindow = window.parent;
    /** @var FrontendMonster */
    this.parentMonster = this.parentWindow.FrontendMonster;
  }

  get $monsterContent() {
    if (this.$monsterContentCache) {
      return this.$monsterContentCache;
    }

    this.$monsterContentCache = {};

    $(this.settings['monster-content-selector']).each(function iter() {
      this.$monsterContentCache[$(this).data('uniqueContentId')] = $(this);
    });
    return this.$monsterContentCache;
  }

  serializeContent(callback) {
    const result = {};
    const that = this;

    this.$monsterContent.each( function iter() {
      result[$(this).data('uniqueContentId')] = that.serializeUniqueContent($(this));
    });
    this.sendToBuilder(callback, [result]);
  }

  serializeUniqueContent($monsterContent) {
    const result = {};
    result.uniqueContentId = $monsterContent.data('uniqueContentId');
    result.materials = {};
    $monsterContent.find('[data-is-material=\'1\']').each(function iter() {
      const material = {};
      material.block = $(this).data('materialBlock');
      result.materials[$(this).data('materialIndex')] = material;
    });
    return result;
  }
  /**
   * Sets VisualFrame settings.
   * Uses VisualFrameSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.VisualFrameSettings || {};
    const settings = {
      'monster-content-selector': '.m-monster-content',
    };
    for (const key in userSettings) {
      if (userSettings.hasOwnProperty(key)) {
        settings[key] = userSettings[key];
      }
    }
    this.settings = settings;
    console.log(this.settings);
  }

  sendToBuilder(func, args) {
    FrameApi.sendMessage(this.parentWindow, func, args);
  }

  hello(name) {
    alert(`Hello, ${name}!`);
  }
}

export default VisualFrame;