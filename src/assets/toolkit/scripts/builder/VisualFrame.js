import FrameApi from './../utils/FrameApi';

class VisualFrame
{
    constructor()
    {
        this.params();
        this.initialize();
    }

    initialize()
    {
        FrameApi.bindMessageListener(this);
        this.parentWindow = window.parent;
        /** @var FrontendMonster */
        this.parentMonster = this.parentWindow.FrontendMonster;
        this.currentMonsterContent = false;
        this.makeItMove();
        var that = this;
        $(window).resize(function() {
            that.updateHandlers();
            return true;
        });
    }

    get $monsterContent()
    {
        if (this.$monsterContentCache) {
            return this.$monsterContentCache;
        }
        this.refreshMonsterContentCache();
        return this.$monsterContentCache;
    }

    refreshMonsterContentCache()
    {
        this.$monsterContentCache = {};
        const that = this;
        $(this.settings['monster-content-selector']).each(function iter() {
            if (!that.currentMonsterContent) {
                that.currentMonsterContent = $(this).data('uniqueContentId');
            }
            that.$monsterContentCache[$(this).data('uniqueContentId')] = $(this);
        });
    }

    getNewMaterialIndex()
    {
        if (!this.lastMaterialIndex) {
            var lastIndex = 0;
            $('[data-is-material]').each(function () {
                var index = $(this).data('material-index');
                if (index > lastIndex) {
                    lastIndex = index;
                }
            });
            this.lastMaterialIndex = lastIndex;
        }
        this.lastMaterialIndex++;
        return this.lastMaterialIndex;
    }

    updateHandlers()
    {
        if (this.$selectedMaterial && this.$handlers) {
            this.$handlers.css(
                'top',
                this.$selectedMaterial.position().top + this.$selectedMaterial.height() - this.$handlers.height()
            );
            this.$selectedMaterial.addClass('m-monster-content__material--active');
        }
    }

    makeItMove()
    {
        this.$handlers = $(`
<div class="monster-block-handlers">
    <a href="#" class="monster-block-handlers__configure">
        <i class="fa fa-cog"></i>
    </a>
    <span class="monster-block-handlers__block-name">Block name here</span>
    <a href="#" class="monster-block-handlers__move-up">
        <i class="fa fa-angle-up"></i>
    </a>
    <a href="#" class="monster-block-handlers__move-down">
        <i class="fa fa-angle-down"></i>
    </a>
    <a href="#" class="monster-block-handlers__clone">
        <i class="fa fa-clone"></i>
    </a>
    <a href="#" class="monster-block-handlers__remove">
        <i class="fa fa-times"></i>
    </a>
</div>`);
        $('body').append(this.$handlers);
        this.$handlers.hide();
        const that = this;
        $(this.settings['monster-content-selector']).on({
                mouseenter: function hoverIn() {
                const $this = $(this);
                that.$handlers.show();
                $this.addClass('m-monster-content__material--highlighted');
            },
            mouseleave: function hoverOut() {
                const $this = $(this);
                $this.removeClass('m-monster-content__material--highlighted');
            },
                click: function clickHandler() {
                const $this = $(this);
                that.selectMaterial($this);
            }
        }, '[data-is-material]');
        that.$handlers.on('click', '.monster-block-handlers__move-up', function() {
            if (that.$selectedMaterial) {
                var $prev = that.$selectedMaterial.prev('[data-is-material]');
                if ($prev.length == 1) {
                    that.$selectedMaterial.insertBefore($prev);
                    that.updateHandlers();
                }
            }
            return false;
        }).on('click', '.monster-block-handlers__move-down', function() {
            if (that.$selectedMaterial) {
                var $next = that.$selectedMaterial.next('[data-is-material]');
                if ($next.length == 1) {
                    that.$selectedMaterial.insertAfter($next);
                    that.updateHandlers();
                }
            }
            return false;
        }).on('click', '.monster-block-handlers__clone', function() {
            if (that.$selectedMaterial) {
                var $clonedMaterial = that.$selectedMaterial.clone();
                $clonedMaterial.data('material-index', that.getNewMaterialIndex()).insertAfter(that.$selectedMaterial);
                that.selectMaterial($clonedMaterial);
            }
            return false;
        }).on('click', '.monster-block-handlers__remove', function() {
            if (that.$selectedMaterial) {
                if (confirm('Are you sure you want to remove this material?')) {
                    that.$selectedMaterial.remove();
                    that.$selectedMaterial = null;
                    that.$handlers.hide(); // it does not work. why? Need to fix!
                }
            }
            return false;
        });
    }

    selectMaterial($material)
    {
        if (this.$selectedMaterial === $material) {
            return;
        }
        if (this.$selectedMaterial) {
            this.$selectedMaterial.removeClass('m-monster-content__material--active');
        }
        this.$selectedMaterial = $material;
        this.updateHandlers();
    }

    serializeContent(callback)
    {
        const result = {};
        const that = this;
        for (const uniqueContentId in this.$monsterContent) {
            if (this.$monsterContent.hasOwnProperty(uniqueContentId)) {
                const $monster = this.$monsterContent[uniqueContentId];
                result[$monster.data('uniqueContentId')] = that.serializeUniqueContent($monster);
            }
        }
        this.sendToBuilder(callback, [result]);
    }

    serializeUniqueContent($monsterContent)
    {
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
    params()
    {
        const userSettings = window.VisualFrameSettings || {};
        const settings = {
            'monster-content-selector': '.m-monster-content'
        };
        for (const key in userSettings) {
            if (userSettings.hasOwnProperty(key)) {
                settings[key] = userSettings[key];
            }
        }
        this.settings = settings;
    }

    sendToBuilder(func, args)
    {
        FrameApi.sendMessage(this.parentWindow, func, args);
    }

    newBlock(blockName, newBlockUrl)
    {
        const that = this;
        $.ajax({
            url: newBlockUrl,
            method: 'POST',
            cache: false,
            data: {
                block: blockName,
                uniqueContentId: this.currentMonsterContent,
                materialIndex: that.$monsterContent[that.currentMonsterContent].find('[data-is-material=\'1\']').length
            }
        }).done(function ok(data) {
            const $element = $(data);
            that.$monsterContent[that.currentMonsterContent].append($element);
            /* global smoothScroll:false */
            smoothScroll.animateScroll($element[0].offsetTop);
        });
    }
}

export default VisualFrame;
