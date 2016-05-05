import BaseEnvironment from './../BaseEnvironment';

class MaterialsEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initMaterialsSelector();
  }

  initMaterialsSelector() {
    this.$materialsGroups = $(`<ul class="materials-groups"></ul>`);
    this.$materialsList = [];

    for (const groupName in this.visualBuilder.settings.groups) {
      if (this.visualBuilder.settings.groups.hasOwnProperty(groupName)) {
        const materials = this.visualBuilder.settings.groups[groupName];
        const i18nGroupName = typeof(polyglot) !== 'undefined' ? polyglot.t(groupName) : groupName;
        const $li = $(`
      <li class="materials-groups__item">
        <a href="#" data-group-name="${groupName}" class="materials-groups__switch-group">
          ${i18nGroupName} <span class="materials-groups__count">(${materials.length})</span>
        </a>
      </li>`);
        this.$materialsGroups.append($li);
        const $list = $(`<ul class="materials-list" data-group-name="${groupName}"></ul>`);
        const items = [];
        for (const materialName of materials) {
          // const material = this.visualBuilder.materialByName(materialName);
          const i18nMaterialName = typeof(polyglot) !== 'undefined' ? polyglot.t(materialName) : materialName;
          const $item = $(`
  <li>
    <a href="#" class="materials-list__item" data-material-name="${materialName}">${i18nMaterialName}</a>
  </li>
  `);
          items.push($item);
        }
        $list.append(items);
        this.$materialsList.push($list);
      }
    }

    const that = this;
    $(document).on('click', '.materials-groups__switch-group', function clickHandler() {
      const $this = $(this);
      const activeClass = 'materials-groups__switch-group--active';
      $this.toggleClass(activeClass);
      const groupName = $this.data('groupName');
      if ($this.hasClass(activeClass)) {
        $('.materials-groups__switch-group').removeClass(activeClass);
        const materialsListActiveClass = 'materials-list--active';

        $('.materials-list').each(function it() {
          const $list = $(this);
          if ($list.hasClass(materialsListActiveClass)) {
            $list.removeClass(materialsListActiveClass);
          }
          if ($list.data('groupName') === groupName) {
            $list.addClass(materialsListActiveClass);
          }
        });

        $this.addClass(activeClass);
        that.$materialsPane.show();
      } else {
        // that's just second click on the same group
        that.$materialsPane.hide();
      }
      return false;
    });
    $(document).on('click', '.materials-list__item', function clickHandler() {
      that.sendMessage(
        'newBlock',
        [
          $(this).data('materialName'),
          that.visualBuilder.settings['new-block-url'],
        ]
      );
    });
  }

  activate() {
    super.activate();
    this.$groupsPane = this.visualBuilder.createStackablePane();
    this.$groupsPane.append(this.$materialsGroups);

    this.$materialsPane = this.visualBuilder.createStackablePane();
    this.$materialsPane.append(this.$materialsList);
    this.$materialsPane.hide();
  }
}
export default MaterialsEnvironment;
