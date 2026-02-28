(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    5203: function (t, e, n) {
      Promise.resolve().then(n.t.bind(n, 9982, 23)),
        Promise.resolve().then(n.bind(n, 2166));
    },
    2166: function (t, e, n) {
      "use strict";
      n.d(e, {
        SiteStateProvider: function () {
          return u;
        },
        m: function () {
          return s;
        },
      });
      var r = n(7437),
        i = n(2265);
      let o = (0, i.createContext)(void 0);
      function u(t) {
        let { children: e } = t,
          [n, u] = (0, i.useState)("attention");
        return (0, r.jsx)(o.Provider, {
          value: {
            state: n,
            goToLetter: () => {
              u("letter");
            },
            goToLanding: () => {
              u("landing");
            },
          },
          children: e,
        });
      }
      function s() {
        let t = (0, i.useContext)(o);
        if (void 0 === t)
          throw Error("useSiteState must be used within a SiteStateProvider");
        return t;
      }
    },
    9982: function () {},
  },
  function (t) {
    t.O(0, [496, 971, 117, 744], function () {
      return t((t.s = 5203));
    }),
      (_N_E = t.O());
  },
]);
