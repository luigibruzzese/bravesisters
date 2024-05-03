import { ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './home-image-C4CEUwcF.mjs';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="info-group" data-v-9b4435c0><img id="main-img"${ssrRenderAttr("src", _imports_0)} data-v-9b4435c0><p data-v-9b4435c0> This is a description for the Dog&#39;s Shelter. The best place where dogs can rest. </p></div><div class="info-group reverse-flex" data-v-9b4435c0><img id="main-img"${ssrRenderAttr("src", _imports_0)} data-v-9b4435c0><p data-v-9b4435c0> This is the second description for the Dog&#39;s Shelter. The best place where dogs can rest. </p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9b4435c0"]]);

export { about as default };
//# sourceMappingURL=about-DnMQ49j5.mjs.map
