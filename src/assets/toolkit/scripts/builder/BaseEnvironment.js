class BaseEnvironment {
  constructor(visualBuilder, name) {
    this.visualBuilder = visualBuilder;
    this.name = name;
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
}

export default BaseEnvironment;

