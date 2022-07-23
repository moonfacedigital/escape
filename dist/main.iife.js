;(function () {
  try {
    var elementStyle = document.createElement('style')
    elementStyle.appendChild(
      document.createTextNode(
        '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Helvetica,system-ui}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}html,body{padding:0;margin:0}body{min-height:100vh;display:flex;flex-direction:column;position:relative;overflow-x:hidden}code,kbd,samp,pre{letter-spacing:-.015em}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.resp_cont{max-width:100%;width:100%;padding-left:1rem;padding-right:1rem;margin-right:auto;margin-left:auto}@media (min-width: 640px){.resp_cont{max-width:100%;padding-left:1rem;padding-right:1rem}}@media (min-width: 768px){.resp_cont{max-width:95%;padding-left:2rem;padding-right:2rem}}@media (min-width: 1024px){.resp_cont{max-width:90%;padding-left:0rem;padding-right:0rem}}@media (min-width: 1280px){.resp_cont{max-width:80%;padding-left:0rem;padding-right:0rem}}@media (min-width: 1536px){.resp_cont{max-width:70%;padding-left:0rem;padding-right:0rem}}.escape_btn{position:fixed;margin-left:auto;margin-right:auto;width:50em;max-width:100%;--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}h1{margin-top:.75rem;margin-bottom:.75rem;font-size:1.875rem;line-height:2.25rem;font-weight:570;letter-spacing:-.03em;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}@media (min-width: 1024px){h1{font-size:2.25rem;line-height:2.5rem}}h2{margin-top:.5rem;margin-bottom:.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:300;line-height:1.25;letter-spacing:-.01em;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}h3{margin-top:.375rem;margin-bottom:.375rem;font-size:.875rem;line-height:1.25rem;font-weight:600;text-transform:uppercase;line-height:1.25;letter-spacing:-.01em;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}main{height:100%;width:100%;padding-top:2rem}@media (min-width: 1024px){main{padding-top:3rem}}nav{max-width:100%;width:100%;padding-left:1rem;padding-right:1rem;margin-right:auto;margin-left:auto}@media (min-width: 640px){nav{max-width:100%;padding-left:1rem;padding-right:1rem}}@media (min-width: 768px){nav{max-width:95%;padding-left:2rem;padding-right:2rem}}@media (min-width: 1024px){nav{max-width:90%;padding-left:0rem;padding-right:0rem}}@media (min-width: 1280px){nav{max-width:80%;padding-left:0rem;padding-right:0rem}}@media (min-width: 1536px){nav{max-width:70%;padding-left:0rem;padding-right:0rem}}nav{display:flex;flex-direction:row;justify-content:space-between;padding-top:3rem}.centered_cont{margin:2rem;width:100%;max-width:50ch;border-radius:.375rem;border-width:2px;--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity));padding:1.5rem}pre{display:inline-block;border-radius:.125rem;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding:.125rem .5rem;font-family:monospace;font-weight:500}.relative{position:relative}.mt-6{margin-top:1.5rem}.flex{display:flex}.grid{display:grid}.h-7{height:1.75rem}.h-10{height:2.5rem}.h-full{height:100%}.w-7{width:1.75rem}.w-full{width:100%}.w-10{width:2.5rem}.flex-row{flex-direction:row}.place-items-center{place-items:center}.items-center{align-items:center}.gap-8{gap:2rem}.text-inherit{color:inherit}.text-mf-slate-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}main{flex:1 0 auto}footer{flex-shrink:0}@-webkit-keyframes noise{0%{transform:translate3d(1%,-1%,0)}10%{transform:translate3d(-5%,-2%,0)}20%{transform:translate3d(10%,5%,0)}30%{transform:translate3d(5%,-11%,0)}40%{transform:translate3d(-12%,-5%,0)}50%{transform:translate3d(10%,9%,0)}60%{transform:translate3d(15%,0,0)}70%{transform:translate3d(-10%,8%,0)}80%{transform:translate3d(10%,2%,0)}90%{transform:translate3d(1%,5%,0)}to{transform:translate3d(0,8%,0)}}@keyframes noise{0%{transform:translate3d(1%,-1%,0)}10%{transform:translate3d(-5%,-2%,0)}20%{transform:translate3d(10%,5%,0)}30%{transform:translate3d(5%,-11%,0)}40%{transform:translate3d(-12%,-5%,0)}50%{transform:translate3d(10%,9%,0)}60%{transform:translate3d(15%,0,0)}70%{transform:translate3d(-10%,8%,0)}80%{transform:translate3d(10%,2%,0)}90%{transform:translate3d(1%,5%,0)}to{transform:translate3d(0,8%,0)}}'
      )
    )
    document.head.appendChild(elementStyle)
  } catch (e) {
    console.error('vite-plugin-css-injected-by-js', e)
  }
})()
var quickExit = (function () {
  'use strict'
  function k() {}
  function C(t, e) {
    for (const n in e) t[n] = e[n]
    return t
  }
  function ot(t) {
    return t()
  }
  function it() {
    return Object.create(null)
  }
  function E(t) {
    t.forEach(ot)
  }
  function at(t) {
    return typeof t == 'function'
  }
  function J(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && typeof t == 'object') || typeof t == 'function'
  }
  function xt(t) {
    return Object.keys(t).length === 0
  }
  function kt(t) {
    const e = {}
    for (const n in t) n[0] !== '$' && (e[n] = t[n])
    return e
  }
  function st(t, e) {
    const n = {}
    e = new Set(e)
    for (const r in t) !e.has(r) && r[0] !== '$' && (n[r] = t[r])
    return n
  }
  function $t(t) {
    return t && at(t.destroy) ? t.destroy : k
  }
  function h(t, e) {
    t.appendChild(e)
  }
  function P(t, e, n) {
    t.insertBefore(e, n || null)
  }
  function T(t) {
    t.parentNode.removeChild(t)
  }
  function zt(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
  }
  function w(t) {
    return document.createElement(t)
  }
  function Et(t) {
    return document.createElementNS('http://www.w3.org/2000/svg', t)
  }
  function lt(t) {
    return document.createTextNode(t)
  }
  function j() {
    return lt(' ')
  }
  function H(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r)
  }
  function b(t, e, n) {
    n == null
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n)
  }
  function ct(t, e) {
    for (const n in e) b(t, n, e[n])
  }
  function St(t) {
    return Array.from(t.childNodes)
  }
  function Lt(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
    const i = document.createEvent('CustomEvent')
    return i.initCustomEvent(t, n, r, e), i
  }
  let G
  function N(t) {
    G = t
  }
  function tt() {
    if (!G) throw new Error('Function called outside component initialization')
    return G
  }
  function Tt(t) {
    tt().$$.on_mount.push(t)
  }
  function Ht() {
    const t = tt()
    return (e, n, { cancelable: r = !1 } = {}) => {
      const i = t.$$.callbacks[e]
      if (i) {
        const l = Lt(e, n, { cancelable: r })
        return (
          i.slice().forEach((o) => {
            o.call(t, l)
          }),
          !l.defaultPrevented
        )
      }
      return !0
    }
  }
  function At(t, e) {
    const n = t.$$.callbacks[e.type]
    n && n.slice().forEach((r) => r.call(this, e))
  }
  const q = [],
    dt = [],
    R = [],
    ft = [],
    ut = Promise.resolve()
  let et = !1
  function mt() {
    et || ((et = !0), ut.then(pt))
  }
  function Mt() {
    return mt(), ut
  }
  function X(t) {
    R.push(t)
  }
  const nt = new Set()
  let K = 0
  function pt() {
    const t = G
    do {
      for (; K < q.length; ) {
        const e = q[K]
        K++, N(e), Ct(e.$$)
      }
      for (N(null), q.length = 0, K = 0; dt.length; ) dt.pop()()
      for (let e = 0; e < R.length; e += 1) {
        const n = R[e]
        nt.has(n) || (nt.add(n), n())
      }
      R.length = 0
    } while (q.length)
    for (; ft.length; ) ft.pop()()
    ;(et = !1), nt.clear(), N(t)
  }
  function Ct(t) {
    if (t.fragment !== null) {
      t.update(), E(t.before_update)
      const e = t.dirty
      ;(t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(X)
    }
  }
  const Q = new Set()
  let L
  function Pt() {
    L = { r: 0, c: [], p: L }
  }
  function jt() {
    L.r || E(L.c), (L = L.p)
  }
  function O(t, e) {
    t && t.i && (Q.delete(t), t.i(e))
  }
  function U(t, e, n, r) {
    if (t && t.o) {
      if (Q.has(t)) return
      Q.add(t),
        L.c.push(() => {
          Q.delete(t), r && (n && t.d(1), r())
        }),
        t.o(e)
    }
  }
  function rt(t, e) {
    const n = {},
      r = {},
      i = { $$scope: 1 }
    let l = t.length
    for (; l--; ) {
      const o = t[l],
        d = e[l]
      if (d) {
        for (const c in o) c in d || (r[c] = 1)
        for (const c in d) i[c] || ((n[c] = d[c]), (i[c] = 1))
        t[l] = d
      } else for (const c in o) i[c] = 1
    }
    for (const o in r) o in n || (n[o] = void 0)
    return n
  }
  function ht(t) {
    return typeof t == 'object' && t !== null ? t : {}
  }
  function W(t) {
    t && t.c()
  }
  function B(t, e, n, r) {
    const { fragment: i, on_mount: l, on_destroy: o, after_update: d } = t.$$
    i && i.m(e, n),
      r ||
        X(() => {
          const c = l.map(ot).filter(at)
          o ? o.push(...c) : E(c), (t.$$.on_mount = [])
        }),
      d.forEach(X)
  }
  function D(t, e) {
    const n = t.$$
    n.fragment !== null &&
      (E(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []))
  }
  function Gt(t, e) {
    t.$$.dirty[0] === -1 && (q.push(t), mt(), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
  }
  function Y(t, e, n, r, i, l, o, d = [-1]) {
    const c = G
    N(t)
    const a = (t.$$ = {
      fragment: null,
      ctx: null,
      props: l,
      update: k,
      not_equal: i,
      bound: it(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (c ? c.$$.context : [])),
      callbacks: it(),
      dirty: d,
      skip_bound: !1,
      root: e.target || c.$$.root,
    })
    o && o(a.root)
    let f = !1
    if (
      ((a.ctx = n
        ? n(t, e.props || {}, (_, y, ...u) => {
            const z = u.length ? u[0] : y
            return (
              a.ctx &&
                i(a.ctx[_], (a.ctx[_] = z)) &&
                (!a.skip_bound && a.bound[_] && a.bound[_](z), f && Gt(t, _)),
              y
            )
          })
        : []),
      a.update(),
      (f = !0),
      E(a.before_update),
      (a.fragment = r ? r(a.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        const _ = St(e.target)
        a.fragment && a.fragment.l(_), _.forEach(T)
      } else a.fragment && a.fragment.c()
      e.intro && O(t.$$.fragment),
        B(t, e.target, e.anchor, e.customElement),
        pt()
    }
    N(c)
  }
  class Z {
    $destroy() {
      D(this, 1), (this.$destroy = k)
    }
    $on(e, n) {
      const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = [])
      return (
        r.push(n),
        () => {
          const i = r.indexOf(n)
          i !== -1 && r.splice(i, 1)
        }
      )
    }
    $set(e) {
      this.$$set &&
        !xt(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1))
    }
  }
  var Ut =
    (() => `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Helvetica,system-ui}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}html,body{padding:0;margin:0}body{min-height:100vh;display:flex;flex-direction:column;position:relative;overflow-x:hidden}code,kbd,samp,pre{letter-spacing:-.015em}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.resp_cont{max-width:100%;width:100%;padding-left:1rem;padding-right:1rem;margin-right:auto;margin-left:auto}@media (min-width: 640px){.resp_cont{max-width:100%;padding-left:1rem;padding-right:1rem}}@media (min-width: 768px){.resp_cont{max-width:95%;padding-left:2rem;padding-right:2rem}}@media (min-width: 1024px){.resp_cont{max-width:90%;padding-left:0rem;padding-right:0rem}}@media (min-width: 1280px){.resp_cont{max-width:80%;padding-left:0rem;padding-right:0rem}}@media (min-width: 1536px){.resp_cont{max-width:70%;padding-left:0rem;padding-right:0rem}}.escape_btn{position:fixed;margin-left:auto;margin-right:auto;width:50em;max-width:100%;--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity))}h1{margin-top:.75rem;margin-bottom:.75rem;font-size:1.875rem;line-height:2.25rem;font-weight:570;letter-spacing:-.03em;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}@media (min-width: 1024px){h1{font-size:2.25rem;line-height:2.5rem}}h2{margin-top:.5rem;margin-bottom:.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:300;line-height:1.25;letter-spacing:-.01em;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}h3{margin-top:.375rem;margin-bottom:.375rem;font-size:.875rem;line-height:1.25rem;font-weight:600;text-transform:uppercase;line-height:1.25;letter-spacing:-.01em;--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}main{height:100%;width:100%;padding-top:2rem}@media (min-width: 1024px){main{padding-top:3rem}}nav{max-width:100%;width:100%;padding-left:1rem;padding-right:1rem;margin-right:auto;margin-left:auto}@media (min-width: 640px){nav{max-width:100%;padding-left:1rem;padding-right:1rem}}@media (min-width: 768px){nav{max-width:95%;padding-left:2rem;padding-right:2rem}}@media (min-width: 1024px){nav{max-width:90%;padding-left:0rem;padding-right:0rem}}@media (min-width: 1280px){nav{max-width:80%;padding-left:0rem;padding-right:0rem}}@media (min-width: 1536px){nav{max-width:70%;padding-left:0rem;padding-right:0rem}}nav{display:flex;flex-direction:row;justify-content:space-between;padding-top:3rem}.centered_cont{margin:2rem;width:100%;max-width:50ch;border-radius:.375rem;border-width:2px;--tw-border-opacity: 1;border-color:rgb(156 163 175 / var(--tw-border-opacity));padding:1.5rem}pre{display:inline-block;border-radius:.125rem;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding:.125rem .5rem;font-family:monospace;font-weight:500}.relative{position:relative}.mt-6{margin-top:1.5rem}.flex{display:flex}.grid{display:grid}.h-7{height:1.75rem}.h-10{height:2.5rem}.h-full{height:100%}.w-7{width:1.75rem}.w-full{width:100%}.w-10{width:2.5rem}.flex-row{flex-direction:row}.place-items-center{place-items:center}.items-center{align-items:center}.gap-8{gap:2rem}.text-inherit{color:inherit}.text-mf-slate-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}main{flex:1 0 auto}footer{flex-shrink:0}@-webkit-keyframes noise{0%{transform:translate3d(1%,-1%,0)}10%{transform:translate3d(-5%,-2%,0)}20%{transform:translate3d(10%,5%,0)}30%{transform:translate3d(5%,-11%,0)}40%{transform:translate3d(-12%,-5%,0)}50%{transform:translate3d(10%,9%,0)}60%{transform:translate3d(15%,0,0)}70%{transform:translate3d(-10%,8%,0)}80%{transform:translate3d(10%,2%,0)}90%{transform:translate3d(1%,5%,0)}to{transform:translate3d(0,8%,0)}}@keyframes noise{0%{transform:translate3d(1%,-1%,0)}10%{transform:translate3d(-5%,-2%,0)}20%{transform:translate3d(10%,5%,0)}30%{transform:translate3d(5%,-11%,0)}40%{transform:translate3d(-12%,-5%,0)}50%{transform:translate3d(10%,9%,0)}60%{transform:translate3d(15%,0,0)}70%{transform:translate3d(-10%,8%,0)}80%{transform:translate3d(10%,2%,0)}90%{transform:translate3d(1%,5%,0)}to{transform:translate3d(0,8%,0)}}
`)()
  function Nt(t) {
    let e, n, r, i, l, o, d, c
    return {
      c() {
        ;(e = w('div')),
          (n = w('div')),
          (r = w('header')),
          (i = w('h1')),
          (i.textContent = `This is ${qt}`),
          (l = j()),
          (o = w('h2')),
          (o.textContent = 'A svelte template for small yet performant apps.'),
          (d = j()),
          (c = w('div')),
          (c.innerHTML = `<h3>Getting started</h3> 
      <pre>pnpm run start</pre>`),
          b(c, 'class', 'mt-6'),
          b(n, 'class', 'centered_cont'),
          b(e, 'class', 'relative grid place-items-center w-full h-full')
      },
      m(a, f) {
        P(a, e, f),
          h(e, n),
          h(n, r),
          h(r, i),
          h(r, l),
          h(r, o),
          h(n, d),
          h(n, c)
      },
      p: k,
      i: k,
      o: k,
      d(a) {
        a && T(e)
      },
    }
  }
  const qt = 'Nano'
  class Ot extends Z {
    constructor(e) {
      super(), Y(this, e, null, Nt, J, {})
    }
  }
  function Bt(t) {
    let e
    return {
      c() {
        ;(e = w('div')),
          (e.innerHTML = '<h1>A second page</h1>'),
          b(e, 'class', 'resp_cont')
      },
      m(n, r) {
        P(n, e, r)
      },
      p: k,
      i: k,
      o: k,
      d(n) {
        n && T(e)
      },
    }
  }
  class Dt extends Z {
    constructor(e) {
      super(), Y(this, e, null, Bt, J, {})
    }
  }
  const Ft = [
    'focus',
    'blur',
    'fullscreenchange',
    'fullscreenerror',
    'scroll',
    'cut',
    'copy',
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'auxclick',
    'click',
    'contextmenu',
    'dblclick',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseout',
    'mouseup',
    'pointerlockchange',
    'pointerlockerror',
    'select',
    'wheel',
    'drag',
    'dragend',
    'dragenter',
    'dragstart',
    'dragleave',
    'dragover',
    'drop',
    'touchcancel',
    'touchend',
    'touchmove',
    'touchstart',
    'pointerover',
    'pointerenter',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointercancel',
    'pointerout',
    'pointerleave',
    'gotpointercapture',
    'lostpointercapture',
  ]
  function It(t, e = []) {
    const n = [...Ft, ...e]
    function r(i) {
      At(t, i)
    }
    return (i) => {
      const l = []
      for (let o = 0; o < n.length; o++) l.push(H(i, n[o], r))
      return {
        destroy: () => {
          for (let o = 0; o < l.length; o++) l[o]()
        },
      }
    }
  }
  function Vt(t) {
    let e,
      n,
      r,
      i = [
        { xmlns: 'http://www.w3.org/2000/svg' },
        t[0],
        t[3],
        { contenteditable: 'true' },
      ],
      l = {}
    for (let o = 0; o < i.length; o += 1) l = C(l, i[o])
    return {
      c() {
        ;(e = Et('svg')), ct(e, l), t[1] === void 0 && X(() => t[6].call(e))
      },
      m(o, d) {
        P(o, e, d),
          t[1] !== void 0 && (e.innerHTML = t[1]),
          n || ((r = [$t(t[2].call(null, e)), H(e, 'input', t[6])]), (n = !0))
      },
      p(o, [d]) {
        ct(
          e,
          (l = rt(i, [
            { xmlns: 'http://www.w3.org/2000/svg' },
            d & 1 && o[0],
            d & 8 && o[3],
            { contenteditable: 'true' },
          ]))
        ),
          d & 2 && o[1] !== e.innerHTML && (e.innerHTML = o[1])
      },
      i: k,
      o: k,
      d(o) {
        o && T(e), (n = !1), E(r)
      },
    }
  }
  function Jt(t, e, n) {
    const r = ['src', 'transformSrc']
    let i = st(e, r)
    const l = Ht(),
      o = It(tt())
    let { src: d } = e,
      { transformSrc: c = (p) => p } = e
    Tt(() => {
      z(d)
    })
    let a = {},
      f = !1,
      _ = {},
      y
    function u(p) {
      return new Promise(($, x) => {
        const m = new XMLHttpRequest()
        m.open('GET', p, !0),
          (m.onload = () => {
            if (m.status >= 200 && m.status < 400)
              try {
                let S = new DOMParser()
                  .parseFromString(m.responseText, 'text/xml')
                  .querySelector('svg')
                S
                  ? ((S = c(S)), $(S))
                  : x(new Error('Loaded file is not valid SVG"'))
              } catch (g) {
                x(g)
              }
            else x(new Error('Error loading SVG'))
          }),
          (m.onerror = x),
          m.send()
      })
    }
    function z(p) {
      a[p] || (f && ((f = !1), l('unloaded')), (a[p] = u(p))),
        a[p]
          .then(async ($) => {
            const x = $.attributes
            for (let m = x.length - 1; m >= 0; m--)
              n(0, (_[x[m].name] = x[m].value), _)
            n(1, (y = $.innerHTML)), await Mt(), (f = !0), l('loaded')
          })
          .catch(($) => {
            delete a[p], console.error($)
          })
    }
    function F() {
      ;(y = this.innerHTML), n(1, y)
    }
    return (
      (t.$$set = (p) => {
        ;(e = C(C({}, e), kt(p))),
          n(3, (i = st(e, r))),
          'src' in p && n(4, (d = p.src)),
          'transformSrc' in p && n(5, (c = p.transformSrc))
      }),
      [_, y, o, i, d, c, F]
    )
  }
  class gt extends Z {
    constructor(e) {
      super(), Y(this, e, Jt, Vt, J, { src: 4, transformSrc: 5 })
    }
  }
  function wt(t, e, n) {
    const r = t.slice()
    return (r[7] = e[n]), r
  }
  function bt(t) {
    let e,
      n = t[7].name + '',
      r,
      i,
      l,
      o,
      d
    function c() {
      return t[6](t[7])
    }
    return {
      c() {
        ;(e = w('button')),
          (r = lt(n)),
          b(e, 'class', 'tablink'),
          b(e, 'title', (i = t[7].name)),
          b(e, 'component', (l = t[7].component))
      },
      m(a, f) {
        P(a, e, f),
          h(e, r),
          o || ((d = [H(e, 'click', c), H(e, 'click', _t)]), (o = !0))
      },
      p(a, f) {
        t = a
      },
      d(a) {
        a && T(e), (o = !1), E(d)
      },
    }
  }
  function Rt(t) {
    let e, n, r, i, l, o, d, c, a, f, _, y, u, z, F, p
    const $ = [{ src: '/mf-ico.svg' }, t[1]]
    let x = {}
    for (let s = 0; s < $.length; s += 1) x = C(x, $[s])
    i = new gt({ props: x })
    let m = t[3],
      g = []
    for (let s = 0; s < m.length; s += 1) g[s] = bt(wt(t, m, s))
    const I = [{ src: '/github-logo.svg' }, t[2]]
    let S = {}
    for (let s = 0; s < I.length; s += 1) S = C(S, I[s])
    f = new gt({ props: S })
    var A = t[0].component
    function vt(s) {
      return {}
    }
    return (
      A && (u = new A(vt())),
      {
        c() {
          ;(e = w('div')),
            (n = w('nav')),
            (r = w('button')),
            W(i.$$.fragment),
            (l = j()),
            (o = w('ul'))
          for (let s = 0; s < g.length; s += 1) g[s].c()
          ;(d = j()),
            (c = w('li')),
            (a = w('a')),
            W(f.$$.fragment),
            (_ = j()),
            (y = w('main')),
            u && W(u.$$.fragment),
            b(r, 'class', 'w-10 h-10'),
            b(r, 'title', t[3][0].name),
            b(r, 'component', t[3][0].component),
            b(a, 'href', 'https://github.com/moonfacedigital/nano'),
            b(o, 'class', 'flex flex-row gap-8 items-center'),
            b(n, 'class', 'text-mf-slate-900'),
            b(e, 'class', 'escape_btn')
        },
        m(s, M) {
          P(s, e, M), h(e, n), h(n, r), B(i, r, null), h(n, l), h(n, o)
          for (let V = 0; V < g.length; V += 1) g[V].m(o, null)
          h(o, d),
            h(o, c),
            h(c, a),
            B(f, a, null),
            h(e, _),
            h(e, y),
            u && B(u, y, null),
            (z = !0),
            F || ((p = [H(r, 'click', t[5]), H(r, 'click', _t)]), (F = !0))
        },
        p(s, [M]) {
          const V = M & 2 ? rt($, [$[0], ht(s[1])]) : {}
          if ((i.$set(V), M & 24)) {
            m = s[3]
            let v
            for (v = 0; v < m.length; v += 1) {
              const yt = wt(s, m, v)
              g[v] ? g[v].p(yt, M) : ((g[v] = bt(yt)), g[v].c(), g[v].m(o, d))
            }
            for (; v < g.length; v += 1) g[v].d(1)
            g.length = m.length
          }
          const Qt = M & 4 ? rt(I, [I[0], ht(s[2])]) : {}
          if ((f.$set(Qt), A !== (A = s[0].component))) {
            if (u) {
              Pt()
              const v = u
              U(v.$$.fragment, 1, 0, () => {
                D(v, 1)
              }),
                jt()
            }
            A
              ? ((u = new A(vt())),
                W(u.$$.fragment),
                O(u.$$.fragment, 1),
                B(u, y, null))
              : (u = null)
          }
        },
        i(s) {
          z ||
            (O(i.$$.fragment, s),
            O(f.$$.fragment, s),
            u && O(u.$$.fragment, s),
            (z = !0))
        },
        o(s) {
          U(i.$$.fragment, s),
            U(f.$$.fragment, s),
            u && U(u.$$.fragment, s),
            (z = !1)
        },
        d(s) {
          s && T(e), D(i), zt(g, s), D(f), u && D(u), (F = !1), E(p)
        },
      }
    )
  }
  function _t(t) {
    let n = t.target.getAttribute('title')
    console.log(n), (activeTabString = JSON.stringify(n))
  }
  function Xt(t, e, n) {
    let r,
      i,
      l = [
        { name: 'Home', component: Ot },
        { name: 'Second Page', component: Dt },
      ]
    const o = (f) => n(0, (d = f))
    let d = l[0]
    const c = () => o(l[0]),
      a = (f) => o(f)
    return (
      n(2, (r = { class: 'text-inherit w-7 h-7', alt: 'Github Logo' })),
      n(1, (i = { class: 'text-inherit w-full', alt: 'Github Logo' })),
      [d, i, r, l, o, c, a]
    )
  }
  class Kt extends Z {
    constructor(e) {
      super(), Y(this, e, Xt, Rt, J, {})
    }
  }
  return new Kt({ target: document.body })
})()