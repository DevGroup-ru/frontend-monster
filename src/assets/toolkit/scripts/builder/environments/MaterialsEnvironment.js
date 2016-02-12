import BaseEnvironment from './../BaseEnvironment';

class MaterialsEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initMaterialsSelector();
  }

  initMaterialsSelector() {
    this.$materialsGroups = $(`<ul class="materials-groups"></ul>`);
    for (const groupName in this.visualBuilder.settings.groups) {
      if (this.visualBuilder.settings.groups.hasOwnProperty(groupName)) {
        console.log(groupName);
        const materials = this.visualBuilder.settings.groups[groupName];
        const i18nGroupName = typeof(polyglot) !== 'undefined' ? polyglot.t(groupName) : groupName;
        const $li = $(`
      <li class="materials-groups__item">
        <a href="#" data-group-name="${groupName}" class="materials-groups__switch-group">
          ${i18nGroupName} <span class="materials-groups__count">(${materials.length})</span>
        </a>
      </li>`);
        this.$materialsGroups.append($li);
      }
    }
  }

  activate() {
    super.activate();
    this.$groupsPane = this.visualBuilder.createStackablePane();
    this.$groupsPane.append(this.$materialsGroups);
  }
}
export default MaterialsEnvironment;
