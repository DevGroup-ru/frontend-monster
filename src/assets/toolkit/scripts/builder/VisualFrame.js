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
    this.currentMonsterContent = false;
    this.makeItMove();
  }

  get $monsterContent() {
    if (this.$monsterContentCache) {
      return this.$monsterContentCache;
    }

    this.refreshMonsterContentCache();

    return this.$monsterContentCache;
  }

  refreshMonsterContentCache() {
    this.$monsterContentCache = {};
    const that = this;
    $(this.settings['monster-content-selector']).each(function iter() {
      if (!that.currentMonsterContent) {
        that.currentMonsterContent = $(this).data('uniqueContentId');
      }
      that.$monsterContentCache[$(this).data('uniqueContentId')] = $(this);
    });
  }

  static makeItMove() {
    this.$handlers = $(`<div class="monster-block-handlers"></div>`);
    
    $(this.settings['monster-content-selector']).on({
      mouseenter: function hoverIn() {

      },
      mouseleave: function hoverOut() {

      },
    }, '[data-monster-block]');
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
  }

  sendToBuilder(func, args) {
    FrameApi.sendMessage(this.parentWindow, func, args);
  }

  newBlock(blockName, newBlockUrl) {
    const that = this;
    $.ajax({
      url: newBlockUrl,
      method: 'POST',
      cache: false,
      data: {
        block: blockName,
        uniqueContentId: this.currentMonsterContent,
      },
    }).done(function ok(data) {
      const $element = $(data);
      that.$monsterContent[that.currentMonsterContent].append($element);
      /* global smoothScroll:false */
      smoothScroll.animateScroll($element[0].offsetTop);
    });
  }
}

export default VisualFrame;
