import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue/server-renderer';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p data-v-4f7709d4> This are our contacts: <ul data-v-4f7709d4><li data-v-4f7709d4>E-mail: mail@shelter.it</li><li data-v-4f7709d4>Tel: 053684864351</li></ul></p><form data-v-4f7709d4><div data-v-4f7709d4><label for="name" data-v-4f7709d4>Name &amp; Surname</label><input type="text" id="name" placeholder="Name &amp; Surname" data-v-4f7709d4></div><div data-v-4f7709d4><label for="mail" data-v-4f7709d4>E-mail</label><input type="email" id="mail" placeholder="E-mail" data-v-4f7709d4></div><div id="message-div" data-v-4f7709d4><label for="message" data-v-4f7709d4>Message</label><textarea id="message" placeholder="Write your message here" data-v-4f7709d4></textarea></div><button data-v-4f7709d4>Send Message</button></form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4f7709d4"]]);

export { contact as default };
//# sourceMappingURL=contact-Bk5z2X3X.mjs.map
