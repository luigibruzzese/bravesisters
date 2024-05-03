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
  _push(`<!--[--><img id="main-img"${ssrRenderAttr("src", _imports_0)} data-v-7a35b15c><h2 data-v-7a35b15c> This is a description for the Dog&#39;s Hotel. The best place where dogs can rest. </h2><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7a35b15c"]]);

export { index as default };
//# sourceMappingURL=index-DvEMBA_V.mjs.map
