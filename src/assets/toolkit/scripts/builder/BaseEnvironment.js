import FrameApi from './../utils/FrameApi';

class BaseEnvironment {
  constructor(visualBuilder, name) {
    this.visualBuilder = visualBuilder;
    this.name = name;
    this.target = $(this.visualBuilder.settings['frame-selector'])[0].contentWindow;
  }

  activate() {
    // deactivate current selected environment
    if (this.name === this.visualBuilder.currentEnvironment) {
      return;
    }
    this.visualBuilder.environments.get(this.visualBuilder.currentEnvironment).deactivate();
  }

  deactivate() {
    console.log('Deactivate called for: ', this.name);
    this.visualBuilder.clearStackable();
  }

  sendMessage(func, args) {
    return FrameApi.sendMessage(this.target, func, args);
  }
}

export default BaseEnvironment;

