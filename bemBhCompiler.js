var through = require('through2');
var File = require('vinyl');
var bh = new (require('bh').BH);

module.exports = function() {
  bh.match('$before', function(ctx, json) {
    // convert listed mods to mod->true
    if (json.mods) {
      // for blocks
      if (json.mods.length > 0) {
        if (json.mods[0]) {
          var newMods = {};
          for (mod of json.mods) {
            newMods[mod] = true;
          }
          //ctx.mods(newMods, true);
          json.mods = newMods;
        }
      }
    }
    if (json.elemMods) {
      // for elements

      if (json.elemMods.length > 0) {

        if (json.elemMods[0]) {
          var newElemMods = {};
          for (mod of json.elemMods) {
            newElemMods[mod] = true;
          }
          //ctx.mods(newMods, true);

          json.elemMods = newElemMods;
        }
      }
    }
    // make icons
    if (json.icon) {
      ctx.tag('span');
      if (json.icon === true) {

        ctx.content('<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>', true);
        ctx.cls('icon-project-color-001-consultation');
      }
    }
  });

  bh.match('$after', function(ctx, json) {
    var clsAdd = [],
        attrs = ctx.attrs();
    if (json.row) {
      clsAdd.push('m-row');
    }
    if (json.utils) {
      for (util of json.utils) {
        clsAdd.push('g__'+util);
      }
    }
    if (clsAdd.length > 0) {
      var oldCls = ctx.cls();
      if (oldCls === undefined) {
        oldCls = '';
      } else {
        oldCls = ' ' + oldCls;
      }
      ctx.cls(clsAdd.join(' ') + oldCls, true);
    }



    if (json.link) {
      ctx.tag('a');
      attrs['href'] = json.link === true ? '#' : json.link;
    }



    if (json.block) {
      //$attrs['data-bem-match'] = $json->block . ($json->elem ? '__' . $json->elem : '');
      attrs['data-bem-match'] = json.block + (json.elem ? '__' + json.elem : '');
    }

    ctx.attrs(attrs, true);

  });

  /**
   * @this {bemBhCompiler}
   */
  var bemBhCompiler = function(file, encoding, callback) {
    console.log(file.path);
    if (file.isNull()) {
      cb(null, file);
      return;
    }
    if (file.isStream()) {
      cb(new gutil.PluginError('bemBhCompiler', 'Streaming not supported'));
      return;
    }
    var json = JSON.parse(file.contents);
    var content = bh.apply(json);
    content += '\n<div class="f-item-code" data-f-toggle="code">BEM JSON<pre class=" language-markup">' + file.contents + '</pre></div>';
    file.contents = new Buffer(content);
    file.path = file.path.replace(/\.json$/, '-compiled.html');
    this.push(file);

    callback();
  };


  return through.obj(bemBhCompiler);
};