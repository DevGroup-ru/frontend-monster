import FrameApi from './../utils/FrameApi';

class VisualFrame {
  constructor() {
    this.params();
    this.initialize();
  }

  initialize() {
    FrameApi.bindMessageListener(this);
    /** @var FrontendMonster */
    this.parentMonster = window.parent.FrontendMonster;
  }

  /**
   * Sets VisualFrame settings.
   * Uses VisualFrameSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.VisualFrameSettings || {};
    const settings = {
    };
    for (const key in userSettings) {
      if (userSettings.hasOwnProperty(key)) {
        settings[key] = userSettings[key];
      }
    }
    this.settings = settings;
  }
}

export default VisualFrame;