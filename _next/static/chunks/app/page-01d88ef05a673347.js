(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    193: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 3464));
    },
    3464: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var r = n(7437),
        i = n(2166),
        o = n(2265);
      let a = [
        "The world is at war, all able citizens eligible to fight have received a letter commanding them to take up arms",
        "Financial systems under attack - immediate action required from all operatives",
        "Resistance movement gains momentum as more recruits join the cause",
        "Critical intelligence: New directives issued to all field agents",
      ];
      function s(e) {
        let { items: t = a } = e,
          n = [...t, ...t, ...t];
        return (0, r.jsxs)("div", {
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "48px",
            backgroundColor: "#1b1b1b",
            display: "flex",
            alignItems: "center",
            zIndex: 1e3,
            overflow: "hidden",
          },
          children: [
            (0, r.jsx)("div", {
              style: {
                backgroundColor: "#ff6f00",
                color: "#FFFFFF",
                padding: "0 clamp(12px, 3vw, 24px)",
                height: "100%",
                display: "flex",
                alignItems: "center",
                fontFamily: "Liberator, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(10px, 2vw, 14px)",
                letterSpacing: "clamp(1px, 0.3vw, 2px)",
                whiteSpace: "nowrap",
                flexShrink: 0,
                position: "relative",
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)",
                textTransform: "uppercase",
              },
              children: "BREAKING NEWS",
            }),
            (0, r.jsxs)("div", {
              style: {
                flex: 1,
                height: "100%",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                position: "relative",
              },
              children: [
                (0, r.jsx)("div", {
                  style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "60px",
                    background:
                      "linear-gradient(to right, #1b1b1b, transparent)",
                    zIndex: 2,
                    pointerEvents: "none",
                  },
                }),
                (0, r.jsx)("div", {
                  style: {
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "60px",
                    background:
                      "linear-gradient(to left, #1b1b1b, transparent)",
                    zIndex: 2,
                    pointerEvents: "none",
                  },
                }),
                (0, r.jsx)("div", {
                  className: "news-scroll",
                  style: {
                    display: "flex",
                    color: "#FFFFFF",
                    fontSize: "clamp(10px, 2vw, 14px)",
                    whiteSpace: "nowrap",
                    paddingLeft: "clamp(12px, 3vw, 24px)",
                    fontFamily: '"Roboto Mono", monospace',
                    fontWeight: 400,
                  },
                  children: n.map((e, t) =>
                    (0, r.jsxs)(
                      "span",
                      {
                        style: { display: "flex", alignItems: "center" },
                        children: [
                          (0, r.jsx)("span", {
                            style: { paddingRight: "60px" },
                            children: e,
                          }),
                          t < n.length - 1 &&
                            (0, r.jsx)("span", {
                              style: {
                                paddingRight: "60px",
                                color: "#666666",
                                fontSize: "12px",
                              },
                              children: "\\",
                            }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
            (0, r.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "\n          .news-scroll {\n            animation: scroll 60s linear infinite;\n          }\n          \n          @keyframes scroll {\n            0% {\n              transform: translateX(0);\n            }\n            100% {\n              transform: translateX(calc(-100% / 3));\n            }\n          }\n        ",
              },
            }),
          ],
        });
      }
      let l =
        "Attention Soldier,\nWe have been made aware of your activities in the trenches and believe you have what it takes to win this war.\nYour mission, if you choose to accept is to enter the battleground, take up arms and battle to make us and our fellow allies victorious.\nAre you ready to make it count?";
      function c() {
        let { goToLanding: e } = (0, i.m)(),
          [t, n] = (0, o.useState)(!1),
          [a, c] = (0, o.useState)(""),
          [d, p] = (0, o.useState)(0),
          [m] = (0, o.useState)(12),
          [x] = (0, o.useState)(!0),
          [g, h] = (0, o.useState)(!1),
          f = (0, o.useRef)(null),
          u = (0, o.useRef)(g),
          b = d >= l.length,
          y = () => {
            c(l), p(l.length);
          },
          v = () => {
            t || (n(!0), p(0), c(""));
          },
          w = (0, o.useRef)(!1);
        return (
          (0, o.useEffect)(() => {
            if (t || w.current) return;
            let e = () => {
                w.current || ((w.current = !0), v());
              },
              n = { passive: !0, capture: !0 };
            return (
              window.addEventListener("wheel", e, n),
              window.addEventListener("touchmove", e, n),
              () => {
                window.removeEventListener("wheel", e, n),
                  window.removeEventListener("touchmove", e, n);
              }
            );
          }, [t]),
          (0, o.useEffect)(() => {
            if (t && !b) {
              let e = setTimeout(() => {
                let e = x ? 3 : 1;
                p((t) => {
                  let n = Math.min(t + e, l.length);
                  return c(l.slice(0, n)), n;
                });
              }, (0 === d ? 1200 : 0) + m);
              return () => clearTimeout(e);
            }
          }, [t, d, b, m, x]),
          (0, o.useEffect)(() => {
            let e = () => {
                t && !b && y();
              },
              n = (t) => {
                (" " === t.key || "Enter" === t.key || "Escape" === t.key) &&
                  (t.preventDefault(), e());
              };
            if (t && !b)
              return (
                window.addEventListener("click", e),
                window.addEventListener("keydown", n),
                () => {
                  window.removeEventListener("click", e),
                    window.removeEventListener("keydown", n);
                }
              );
          }, [t, b]),
          (0, o.useEffect)(() => {
            let e = new Audio("/attention-audio.mp3");
            (e.loop = !0), (e.volume = 0.5), (e.muted = !0), (f.current = e);
            let t = !1,
              n = () => {
                !t &&
                  f.current &&
                  (u.current || (f.current.muted = !1), (t = !0));
              };
            return (
              (async () => {
                try {
                  await e.play(),
                    window.addEventListener("click", n, { once: !0 }),
                    window.addEventListener("touchstart", n, { once: !0 }),
                    window.addEventListener("keydown", n, { once: !0 });
                } catch (r) {
                  console.log("Audio autoplay prevented:", r);
                  let t = async () => {
                    try {
                      (e.muted = u.current),
                        await e.play(),
                        window.addEventListener("click", n, { once: !0 }),
                        window.addEventListener("touchstart", n, { once: !0 }),
                        window.addEventListener("keydown", n, { once: !0 });
                    } catch (e) {
                      console.log("Audio play failed:", e);
                    }
                  };
                  window.addEventListener("click", t, { once: !0 }),
                    window.addEventListener("touchstart", t, { once: !0 }),
                    window.addEventListener("keydown", t, { once: !0 });
                }
              })(),
              () => {
                e.pause(), (e.src = "");
              }
            );
          }, []),
          (0, o.useEffect)(() => {
            u.current = g;
          }, [g]),
          (0, o.useEffect)(() => {
            f.current && (f.current.muted = g);
          }, [g]),
          (0, r.jsxs)("div", {
            style: {
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
              height: "100vh",
              backgroundColor: "#1b1b1b",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              overflowX: "hidden",
              boxSizing: "border-box",
            },
            children: [
              (0, r.jsx)("video", {
                className: "hero-background-video",
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                  objectFit: "cover",
                  zIndex: 0,
                  filter: "grayscale(100%)",
                },
                children: (0, r.jsx)("source", {
                  src: "/video-output-A8C697F1-F104-412D-89AD-89A7735DA1FA-1.mp4",
                  type: "video/mp4",
                }),
              }),
              (0, r.jsx)("div", {
                className: "hero-video-overlay",
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                  backgroundColor: "#1b1b1b",
                  opacity: t ? 0.95 : 0.75,
                  zIndex: 1,
                  pointerEvents: "none",
                },
              }),
              (0, r.jsx)(s, {}),
              (0, r.jsxs)("div", {
                className: "hero-content-container",
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "clamp(16px, 3vw, 24px)",
                  marginTop: "48px",
                  opacity: t ? 0 : 1,
                  transition: "opacity 0.5s ease-out",
                  pointerEvents: "none",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  maxWidth: "100vw",
                  maxHeight: "100vh",
                  zIndex: 10,
                  boxSizing: "border-box",
                },
                children: [
                  (0, r.jsxs)("div", {
                    style: { position: "relative", display: "inline-block" },
                    children: [
                      (0, r.jsx)("svg", {
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          pointerEvents: "none",
                          zIndex: 1,
                        },
                        viewBox: "0 0 200 40",
                        preserveAspectRatio: "none",
                        children: (0, r.jsx)("path", {
                          d: "M0 0 L192 0 L200 40 L8 40 Z",
                          fill: "none",
                          stroke: "white",
                          strokeWidth: "2",
                          opacity: "0.2",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "clamp(8px, 1.2vw, 12px)",
                          backgroundColor: "#1b1b1b",
                          padding:
                            "clamp(10px, 1.5vw, 12px) clamp(16px, 2.5vw, 24px)",
                          fontSize: "clamp(10px, 1.8vw, 12px)",
                          color: "#FFFFFF",
                          letterSpacing: "clamp(2px, 0.4vw, 3px)",
                          textTransform: "uppercase",
                          fontFamily: '"Roboto Mono", monospace',
                          fontWeight: 700,
                          clipPath:
                            "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
                          boxShadow:
                            "0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 2px 4px rgba(0, 0, 0, 0.5)",
                          position: "relative",
                          zIndex: 0,
                        },
                        children: [
                          (0, r.jsx)("span", {
                            style: {
                              width: "clamp(8px, 1.2vw, 10px)",
                              height: "clamp(8px, 1.2vw, 10px)",
                              borderRadius: "50%",
                              backgroundColor: "#ff6f00",
                              border: "1px solid #B10000",
                              animation: "pulse 2s ease-in-out infinite",
                              flexShrink: 0,
                              boxShadow: "0 0 4px rgba(255, 0, 0, 0.6)",
                            },
                          }),
                          (0, r.jsx)("span", {
                            style: { fontWeight: 700 },
                            children: "NEW ASSIGNMENT",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "clamp(6px, 1vw, 8px)",
                    },
                    children: [
                      (0, r.jsx)("h1", {
                        style: {
                          color: "rgba(255, 255, 255, 0.60)",
                          textAlign: "center",
                          fontFamily: "Liberator, sans-serif",
                          fontSize: "clamp(3rem, 12vw, 9rem)",
                          fontStyle: "normal",
                          fontWeight: 410,
                          lineHeight: "clamp(2.5rem, 10vw, 7.5rem)",
                          margin: 0,
                          textTransform: "uppercase",
                        },
                        children: (0, r.jsx)("span", {
                          style: { color: "#ff6f00" },
                          children: "ATTENTION:",
                        }),
                      }),
                      (0, r.jsx)("h1", {
                        style: {
                          color: "#FFF",
                          fontFamily: "Liberator, sans-serif",
                          fontSize: "clamp(2.5rem, 10vw, 7.5rem)",
                          fontStyle: "normal",
                          fontWeight: 410,
                          lineHeight: "clamp(2.5rem, 10vw, 7.5rem)",
                          margin: 0,
                          textTransform: "uppercase",
                        },
                        children: "DO NOT IGNORE",
                      }),
                    ],
                  }),
                ],
              }),
              !t &&
                (0, r.jsxs)("div", {
                  "aria-hidden": !0,
                  style: {
                    position: "fixed",
                    bottom: "clamp(120px, 22vw, 200px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 100,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "clamp(6px, 1vw, 10px)",
                    pointerEvents: "none",
                    animation: "scroll-prompt-pulse 2s ease-in-out infinite",
                  },
                  children: [
                    (0, r.jsx)("span", {
                      style: {
                        color: "rgba(255, 255, 255, 0.75)",
                        fontFamily: '"Roboto Mono", monospace',
                        fontSize: "clamp(11px, 2vw, 14px)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      },
                      children: "Scroll or tap to open",
                    }),
                    (0, r.jsx)("span", {
                      style: {
                        display: "block",
                        width: "24px",
                        height: "24px",
                        borderRight: "2px solid rgba(255, 255, 255, 0.6)",
                        borderBottom: "2px solid rgba(255, 255, 255, 0.6)",
                        transform: "rotate(45deg)",
                        marginTop: "-4px",
                      },
                    }),
                  ],
                }),
              !t &&
                (0, r.jsx)("div", {
                  "aria-label": "Open letter",
                  role: "button",
                  tabIndex: 0,
                  onClick: v,
                  onKeyDown: (e) => {
                    ("Enter" === e.key || " " === e.key) &&
                      (e.preventDefault(), v());
                  },
                  style: {
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    maxWidth: "100vw",
                    height: "clamp(100px, 18vw, 160px)",
                    zIndex: 9999,
                    cursor: "pointer",
                    pointerEvents: "auto",
                    boxSizing: "border-box",
                  },
                }),
              (0, r.jsx)("div", {
                onClick: v,
                role: "button",
                tabIndex: 0,
                onKeyDown: (e) => {
                  ("Enter" === e.key || " " === e.key) &&
                    (e.preventDefault(), v());
                },
                className: "letter-container ".concat(t ? "moved-up" : ""),
                style: {
                  position: "fixed",
                  top: t ? "0" : "auto",
                  bottom: t ? "auto" : "0",
                  left: "50%",
                  transformOrigin: "center center",
                  transform: t
                    ? "translateX(-50%) translateY(0) scale(0.88)"
                    : "translateX(-50%) translateY(calc(100% - clamp(80px, 10vw, 120px))) scale(1)",
                  width: "calc(100% - clamp(40px, 10vw, 160px))",
                  maxWidth: "min(800px, 100vw)",
                  aspectRatio: "1 / 1.414",
                  height: t ? "auto" : "calc(100vh + 400px)",
                  backgroundImage:
                    "\n            repeating-linear-gradient(\n              0deg,\n              rgba(0,0,0,0.05) 0px,\n              transparent 1px,\n              transparent 2px,\n              rgba(0,0,0,0.05) 3px\n            ),\n            repeating-linear-gradient(\n              90deg,\n              rgba(0,0,0,0.05) 0px,\n              transparent 1px,\n              transparent 2px,\n              rgba(0,0,0,0.05) 3px\n            )\n          ",
                  backgroundColor: "#E8E8E8",
                  backgroundSize: "20px 20px",
                  cursor: t ? "default" : "pointer",
                  zIndex: 50,
                  transition:
                    "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), bottom 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                },
                onMouseEnter: (e) => {
                  !t &&
                    window.innerWidth > 768 &&
                    (e.currentTarget.style.transform =
                      "translateX(-50%) translateY(calc(100% - ".concat(
                        "clamp(90px, 12vw, 135px)",
                        ")) scale(1)"
                      ));
                },
                onMouseLeave: (e) => {
                  !t &&
                    window.innerWidth > 768 &&
                    (e.currentTarget.style.transform =
                      "translateX(-50%) translateY(calc(100% - ".concat(
                        "clamp(80px, 10vw, 120px)",
                        ")) scale(1)"
                      ));
                },
                children: (0, r.jsxs)("div", {
                  className: "letter-content-inner",
                  style: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    padding:
                      "clamp(60px, 10vw, 108px) clamp(20px, 5vw, 60px) clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px)",
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    boxSizing: "border-box",
                    overflowY: "auto",
                  },
                  children: [
                    (0, r.jsx)("div", {
                      style: {
                        position: "absolute",
                        top: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 2,
                      },
                      children: (0, r.jsx)("img", {
                        src: "/war-footer-logo.svg",
                        alt: "WAR",
                        style: {
                          height: "clamp(32px, 6vw, 48px)",
                          width: "auto",
                          filter: "brightness(0)",
                        },
                      }),
                    }),
                    (0, r.jsx)("div", {
                      style: {
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        width: "clamp(60px, 10vw, 80px)",
                        height: "clamp(60px, 10vw, 80px)",
                        transform: "rotate(-12deg)",
                        transformOrigin: "center center",
                      },
                      children: (0, r.jsxs)("div", {
                        style: {
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          border: "2.5px solid #ff6f00",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: '"Roboto Mono", monospace',
                          fontSize: "clamp(7px, 1.2vw, 9px)",
                          textAlign: "center",
                          color: "#ff6f00",
                          fontWeight: 700,
                          backgroundColor: "transparent",
                          zIndex: 2,
                          position: "relative",
                          boxShadow:
                            "\n                    0 2px 4px rgba(0,0,0,0.2),\n                    inset 0 0 8px rgba(255,111,0,0.1)\n                  ",
                        },
                        children: [
                          (0, r.jsx)("div", {
                            style: {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              borderRadius: "50%",
                              backgroundImage:
                                "\n                      radial-gradient(circle at 30% 30%, rgba(255,111,0,0.1) 0%, transparent 50%),\n                      radial-gradient(circle at 70% 70%, rgba(255,111,0,0.08) 0%, transparent 50%)\n                    ",
                              pointerEvents: "none",
                            },
                          }),
                          (0, r.jsxs)("div", {
                            style: { position: "relative", zIndex: 1 },
                            children: [
                              "CLASSIFIED",
                              (0, r.jsx)("br", {}),
                              "TOP SECRET",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      style: {
                        marginTop: "80px",
                        fontFamily: '"Roboto Mono", monospace',
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.8",
                        color: "#1a1a1a",
                        whiteSpace: "pre-wrap",
                        position: "relative",
                        zIndex: 1,
                      },
                      children: [
                        a,
                        !b &&
                          (0, r.jsx)("span", {
                            style: {
                              display: "inline-block",
                              width: "2px",
                              height: "20px",
                              backgroundColor: "#000000",
                              marginLeft: "4px",
                              animation: "blink 1s infinite",
                            },
                          }),
                        b &&
                          (0, r.jsx)("div", {
                            style: { marginTop: "40px", paddingBottom: "80px" },
                            children: (0, r.jsxs)("div", {
                              style: {
                                position: "relative",
                                display: "inline-block",
                                transition:
                                  "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                              },
                              onMouseEnter: (e) => {
                                e.currentTarget.style.transform =
                                  "scale(1.05) translateY(-2px)";
                              },
                              onMouseLeave: (e) => {
                                e.currentTarget.style.transform =
                                  "scale(1) translateY(0)";
                              },
                              children: [
                                (0, r.jsx)("svg", {
                                  style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    pointerEvents: "none",
                                    zIndex: 1,
                                  },
                                  viewBox: "0 0 200 50",
                                  preserveAspectRatio: "none",
                                  children: (0, r.jsx)("path", {
                                    d: "M0 0 L200 0 L200 34 L184 50 L0 50 L0 0 Z",
                                    fill: "none",
                                    stroke: "#ff6f00",
                                    strokeWidth: "2",
                                    strokeLinecap: "square",
                                    strokeLinejoin: "miter",
                                  }),
                                }),
                                (0, r.jsx)("button", {
                                  onClick: e,
                                  style: {
                                    padding:
                                      "clamp(14px, 2.2vw, 18px) clamp(28px, 4.5vw, 40px)",
                                    fontSize: "clamp(12px, 2vw, 14px)",
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    backgroundColor: "#ff6f00",
                                    border: "none",
                                    borderRadius: 0,
                                    cursor: "pointer",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.5px",
                                    fontFamily: "Liberator, sans-serif",
                                    transition:
                                      "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    boxShadow: "none",
                                    minHeight: "48px",
                                    position: "relative",
                                    zIndex: 0,
                                    clipPath:
                                      "polygon(0% 0%, 100% 0%, 100% 68%, 92% 100%, 0% 100%)",
                                  },
                                  onMouseEnter: (e) => {
                                    (e.currentTarget.style.backgroundColor =
                                      "#e66400"),
                                      (e.currentTarget.style.boxShadow =
                                        "0 4px 12px rgba(255, 111, 0, 0.4)");
                                  },
                                  onMouseLeave: (e) => {
                                    (e.currentTarget.style.backgroundColor =
                                      "#ff6f00"),
                                      (e.currentTarget.style.boxShadow =
                                        "none");
                                  },
                                  children: "ENTER THE WAR",
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("button", {
                onClick: () => h(!g),
                style: {
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(27, 27, 27, 0.85)",
                  border: "1px solid rgba(255, 111, 0, 0.4)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1e3,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                },
                onMouseEnter: (e) => {
                  (e.currentTarget.style.backgroundColor =
                    "rgba(27, 27, 27, 0.95)"),
                    (e.currentTarget.style.borderColor =
                      "rgba(255, 111, 0, 0.6)"),
                    (e.currentTarget.style.transform = "scale(1.1)"),
                    (e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(255, 111, 0, 0.25)");
                },
                onMouseLeave: (e) => {
                  (e.currentTarget.style.backgroundColor =
                    "rgba(27, 27, 27, 0.85)"),
                    (e.currentTarget.style.borderColor =
                      "rgba(255, 111, 0, 0.4)"),
                    (e.currentTarget.style.transform = "scale(1)"),
                    (e.currentTarget.style.boxShadow = "none");
                },
                children: g
                  ? (0, r.jsxs)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "white",
                      strokeWidth: "2",
                      children: [
                        (0, r.jsx)("path", { d: "M11 5L6 9H2v6h4l5 4V5z" }),
                        (0, r.jsx)("line", {
                          x1: "23",
                          y1: "9",
                          x2: "17",
                          y2: "15",
                        }),
                        (0, r.jsx)("line", {
                          x1: "17",
                          y1: "9",
                          x2: "23",
                          y2: "15",
                        }),
                      ],
                    })
                  : (0, r.jsxs)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "white",
                      strokeWidth: "2",
                      children: [
                        (0, r.jsx)("path", { d: "M11 5L6 9H2v6h4l5 4V5z" }),
                        (0, r.jsx)("path", {
                          d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",
                        }),
                      ],
                    }),
              }),
              (0, r.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "\n          /* Stage 1 & 2: fixed elements strictly viewport-bound (zoom + all screen sizes) */\n          video.hero-background-video {\n            z-index: 0 !important;\n            inset: 0 !important;\n            max-width: 100vw !important;\n            max-height: 100vh !important;\n            object-fit: cover !important;\n          }\n          \n          .hero-video-overlay {\n            z-index: 1 !important;\n            inset: 0 !important;\n            max-width: 100vw !important;\n            max-height: 100vh !important;\n          }\n          \n          .hero-content-container {\n            z-index: 10 !important;\n            position: fixed !important;\n            top: 0 !important;\n            left: 0 !important;\n            right: 0 !important;\n            bottom: 0 !important;\n            max-width: 100vw !important;\n            max-height: 100vh !important;\n            pointer-events: none !important;\n            box-sizing: border-box !important;\n          }\n          \n          .letter-container {\n            max-width: min(800px, 100vw) !important;\n          }\n          \n          /* No pointer-events on children so clicks pass through to letter on desktop and mobile */\n          \n          .hero-content-container h1 {\n            color: #FFFFFF !important;\n            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8) !important;\n            mix-blend-mode: normal !important;\n          }\n          \n          /* Ensure video doesn't create stacking context issues */\n          .hero-background-video {\n            mix-blend-mode: normal !important;\n          }\n          \n          /* Letter must be on top and receive clicks on desktop and mobile */\n          .letter-container {\n            pointer-events: auto !important;\n            z-index: 50 !important;\n            position: fixed !important;\n          }\n          \n          /* Mobile: Fix letter end position to account for banner and spacing */\n          @media (max-width: 768px) {\n            /* When moved up: position below banner with adequate spacing */\n            .letter-container.moved-up {\n              top: calc(48px + clamp(16px, 4vw, 32px)) !important;\n              bottom: 0 !important;\n              transform: translateX(-50%) translateY(0) scale(0.88) !important;\n              height: auto !important;\n              max-height: calc(100vh - 48px - clamp(16px, 4vw, 32px)) !important;\n            }\n            \n            /* Make letter content scrollable within container */\n            .letter-container.moved-up .letter-content-inner {\n              overflow-y: auto !important;\n            }\n          }\n          \n          @keyframes pulse {\n            0%, 100% {\n              opacity: 1;\n            }\n            50% {\n              opacity: 0.3;\n            }\n          }\n          \n          @keyframes blink {\n            0%, 50% {\n              opacity: 1;\n            }\n            51%, 100% {\n              opacity: 0;\n            }\n          }\n          \n          @keyframes fadeInOut {\n            0%, 100% {\n              opacity: 0.4;\n            }\n            50% {\n              opacity: 0.8;\n            }\n          }\n          \n          @keyframes scroll-prompt-pulse {\n            0%, 100% {\n              opacity: 0.7;\n              transform: translateX(-50%) translateY(0);\n            }\n            50% {\n              opacity: 1;\n              transform: translateX(-50%) translateY(6px);\n            }\n          }\n        ",
                },
              }),
            ],
          })
        );
      }
      function d(e) {
        let { url: t, theme: n = "dark" } = e,
          i = (0, o.useRef)(null),
          a = (0, o.useRef)(null),
          [s, l] = (0, o.useState)(!1),
          c = (0, o.useRef)(0),
          d = (0, o.useMemo)(() => {
            let e = t.split("?")[0];
            return e.startsWith("https://x.com/")
              ? e.replace("https://x.com/", "https://twitter.com/")
              : e.startsWith("http://x.com/")
              ? e.replace("http://x.com/", "https://twitter.com/")
              : e;
          }, [t]),
          p = (0, o.useMemo)(() => {
            var e;
            let t = d.match(/\/status\/(\d+)/);
            return null !== (e = null == t ? void 0 : t[1]) && void 0 !== e
              ? e
              : "";
          }, [d]);
        return ((0, o.useEffect)(() => {
          if (!p || !i.current) return;
          let e = !1,
            t = ++c.current;
          if ((l(!1), !a.current)) {
            let e = document.createElement("div");
            (e.style.width = "100%"), (a.current = e), i.current.appendChild(e);
          }
          let r = a.current;
          if (!r) return;
          for (; r.firstChild; ) r.removeChild(r.firstChild);
          let o = async () => {
              try {
                var r, i, o, s, d;
                if (!a.current) return;
                if (
                  null === (i = window.twttr) || void 0 === i
                    ? void 0
                    : null === (r = i.widgets) || void 0 === r
                    ? void 0
                    : r.createTweet
                ) {
                  let r = await window.twttr.widgets.createTweet(p, a.current, {
                    theme: n,
                    dnt: !0,
                    align: "center",
                    linkColor: "#FFFFFF",
                    conversation: "none",
                    cards: "hidden",
                  });
                  if (e || c.current !== t) {
                    try {
                      null == r ||
                        null === (d = r.remove) ||
                        void 0 === d ||
                        d.call(r);
                    } catch (e) {}
                    return;
                  }
                  l(!0);
                  return;
                }
                null === (s = window.twttr) ||
                  void 0 === s ||
                  null === (o = s.widgets) ||
                  void 0 === o ||
                  o.load(a.current);
              } catch (e) {}
            },
            s = document.getElementById("twitter-wjs");
          if (s) {
            var d;
            return (
              (null === (d = window.twttr) || void 0 === d ? void 0 : d.widgets)
                ? o()
                : s.addEventListener("load", o, { once: !0 }),
              () => {
                e = !0;
              }
            );
          }
          let m = document.createElement("script");
          return (
            (m.id = "twitter-wjs"),
            (m.src = "https://platform.twitter.com/widgets.js"),
            (m.async = !0),
            (m.onload = o),
            document.body.appendChild(m),
            () => {
              e = !0;
            }
          );
        }, [p, n]),
        t)
          ? (0, r.jsx)("div", {
              ref: i,
              style: {
                width: "100%",
                display: s ? "block" : "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "center",
                overflow: "visible",
                padding: s ? 0 : "16px 12px",
              },
              children:
                !s &&
                (0, r.jsx)("div", {
                  style: {
                    width: "100%",
                    textAlign: "center",
                    flexBasis: "100%",
                  },
                  children: (0, r.jsx)("a", {
                    href: d,
                    target: "_blank",
                    rel: "noreferrer",
                    style: {
                      color: "#FFFFFF",
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: 12,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      textDecoration: "none",
                      opacity: 0.85,
                    },
                    children: "Loading post…",
                  }),
                }),
            })
          : (0, r.jsx)("div", {
              style: {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                fontFamily: '"Roboto Mono", monospace',
                fontSize: 12,
                letterSpacing: 1,
                textTransform: "uppercase",
              },
              children: "Paste tweet URL",
            });
      }
      function p() {
        let e = (0, o.useRef)(null),
          [t, n] = (0, o.useState)(null),
          [i, a] = (0, o.useState)(0),
          [s, l] = (0, o.useState)("idle"),
          c = (0, o.useMemo)(
            () =>
              "loading" === s
                ? "…"
                : "error" === s || null === t
                ? "—"
                : new Intl.NumberFormat("en-US").format(i),
            [i, s, t]
          );
        return (
          (0, o.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let r = !1,
              i = async () => {
                l("loading");
                let e = await fetch("/api/holders", { cache: "no-store" });
                if (!e.ok) throw Error("holders fetch failed");
                let t = await e.json();
                if (
                  !(null == t ? void 0 : t.holders) ||
                  "number" != typeof t.holders
                )
                  throw Error("bad holders");
                return t.holders;
              },
              o = (e) => {
                let t = performance.now();
                a(0);
                let n = (r) => {
                  let i = Math.min(1, (r - t) / 1200);
                  a(Math.floor((1 - Math.pow(1 - i, 3)) * e)),
                    i < 1 ? requestAnimationFrame(n) : a(e);
                };
                requestAnimationFrame(n);
              },
              s = new IntersectionObserver(
                async (e) => {
                  let t = e[0];
                  if ((null == t ? void 0 : t.isIntersecting) && !r) {
                    (r = !0), s.disconnect();
                    try {
                      let e = await i();
                      n(e);
                      let t = "joinForcesHoldersAnimated";
                      if ("1" === window.sessionStorage.getItem(t)) {
                        a(e), l("ready");
                        return;
                      }
                      o(e), l("ready"), window.sessionStorage.setItem(t, "1");
                    } catch (e) {
                      l("error");
                    }
                  }
                },
                { threshold: 0.35 }
              );
            return s.observe(t), () => s.disconnect();
          }, []),
          (0, r.jsxs)("div", {
            className: "landing-root",
            style: {
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
              minHeight: "100vh",
              backgroundColor: "#1b1b1b",
              position: "static",
              display: "flex",
              flexDirection: "column",
              overflowX: "hidden",
              boxSizing: "border-box",
            },
            children: [
              (0, r.jsxs)("div", {
                className: "landing-content-cap",
                style: {
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  overflowX: "hidden",
                  boxSizing: "border-box",
                },
                children: [
                  (0, r.jsxs)("section", {
                    style: {
                      position: "static",
                      width: "100%",
                      maxWidth: "100%",
                      height: "100vh",
                      display: "block",
                      overflow: "hidden",
                      boxSizing: "border-box",
                    },
                    children: [
                      (0, r.jsx)("video", {
                        className: "landing-hero-video",
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        preload: "auto",
                        style: {
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: "100%",
                          height: "100%",
                          maxWidth: "100vw",
                          maxHeight: "100vh",
                          objectFit: "cover",
                          zIndex: 0,
                          filter: "grayscale(100%)",
                          mixBlendMode: "normal",
                          isolation: "isolate",
                        },
                        children: (0, r.jsx)("source", {
                          src: "/u1476882918_httpss.mj.runjH2hpAAhtWk_b2_bomber_hovering_in_th_e1dad761-cc0d-43e3-a8f3-5a11abcf6f23_3.mp4",
                          type: "video/mp4",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "landing-hero-overlay",
                        style: {
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: "100%",
                          height: "100%",
                          maxWidth: "100vw",
                          maxHeight: "100vh",
                          backgroundColor: "#1b1b1b",
                          opacity: 0.5,
                          zIndex: 1,
                          pointerEvents: "none",
                          isolation: "isolate",
                        },
                      }),
                      (0, r.jsxs)("header", {
                        className: "landing-hero-logo",
                        style: {
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          maxWidth: "100vw",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "clamp(8px, 1.5vw, 14px)",
                          paddingTop: "clamp(20px, 4vw, 40px)",
                          zIndex: 10,
                          mixBlendMode: "normal",
                          isolation: "isolate",
                          willChange: "transform",
                          boxSizing: "border-box",
                        },
                        children: [
                          (0, r.jsx)("img", {
                            src: "/war-footer-logo.svg",
                            alt: "WAR",
                            style: {
                              height: "clamp(40px, 6vw, 56px)",
                              width: "auto",
                              filter: "brightness(0) invert(1)",
                            },
                          }),
                          (0, r.jsx)("p", {
                            style: {
                              margin: 0,
                              color: "rgba(255,255,255,0.75)",
                              fontSize: "clamp(0.7rem, 1.6vw, 0.9rem)",
                              fontFamily: "system-ui, sans-serif",
                              letterSpacing: "0.04em",
                              textAlign: "center",
                            },
                            children:
                              "Launched on BonkFun \xb7 Powered by USD1",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "landing-hero-content",
                        style: {
                          position: "fixed",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          maxWidth: "100vw",
                          zIndex: 10,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "clamp(20px, 3vw, 32px)",
                          padding:
                            "clamp(40px, 8vw, 80px) clamp(20px, 4vw, 40px)",
                          boxSizing: "border-box",
                          mixBlendMode: "normal",
                          isolation: "isolate",
                          willChange: "transform",
                          transform: "translateZ(0)",
                        },
                        children: [
                          (0, r.jsxs)("div", {
                            style: {
                              position: "relative",
                              display: "inline-block",
                            },
                            children: [
                              (0, r.jsx)("h1", {
                                style: {
                                  color: "#FFF",
                                  fontFamily: "Liberator",
                                  fontSize: "clamp(3rem, 10vw, 7.5rem)",
                                  fontStyle: "normal",
                                  fontWeight: 410,
                                  lineHeight: "clamp(3rem, 10vw, 7.5rem)",
                                  margin: 0,
                                  textAlign: "center",
                                  textShadow:
                                    "0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.7)",
                                  mixBlendMode: "normal",
                                },
                                children: "WAR IS LIVE",
                              }),
                              (0, r.jsx)("span", {
                                className: "hero-live-dot",
                                style: {
                                  position: "absolute",
                                  top: 0,
                                  right: "clamp(-32px, -4vw, -28px)",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  borderRadius: "50%",
                                  backgroundColor: "#ff6f00",
                                  border: "2px solid #B10000",
                                  animation: "pulse 2s ease-in-out infinite",
                                },
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            style: {
                              display: "flex",
                              gap: "clamp(8px, 1.5vw, 12px)",
                              flexWrap: "wrap",
                              justifyContent: "center",
                              width: "100%",
                              maxWidth: "100%",
                              boxSizing: "border-box",
                              padding: "0 clamp(16px, 4vw, 40px)",
                            },
                            children: [
                              (0, r.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  transition:
                                    "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                },
                                onMouseEnter: (e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1.05) translateY(-2px)";
                                },
                                onMouseLeave: (e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1) translateY(0)";
                                },
                                children: [
                                  (0, r.jsx)("svg", {
                                    style: {
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "100%",
                                      height: "100%",
                                      pointerEvents: "none",
                                      zIndex: 1,
                                      overflow: "visible",
                                    },
                                    viewBox: "0 0 200 50",
                                    preserveAspectRatio: "none",
                                    children: (0, r.jsx)("path", {
                                      d: "M0 0 L200 0 L200 34 L184 50 L0 50 L0 0 Z",
                                      fill: "none",
                                      stroke: "#ff6f00",
                                      strokeWidth: "2",
                                      strokeLinecap: "square",
                                      strokeLinejoin: "miter",
                                    }),
                                  }),
                                  (0, r.jsx)("button", {
                                    style: {
                                      padding:
                                        "clamp(14px, 2.2vw, 18px) clamp(28px, 4.5vw, 40px)",
                                      fontSize: "clamp(12px, 2vw, 16px)",
                                      color: "#FFFFFF",
                                      backgroundColor: "#ff6f00",
                                      border: "none",
                                      borderRadius: 0,
                                      cursor: "pointer",
                                      textTransform: "uppercase",
                                      letterSpacing: "1.5px",
                                      fontFamily: "Liberator, sans-serif",
                                      fontWeight: 700,
                                      clipPath:
                                        "polygon(0% 0%, 100% 0%, 100% 68%, 92% 100%, 0% 100%)",
                                      transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                      minHeight: "48px",
                                      minWidth: "140px",
                                      position: "relative",
                                      zIndex: 0,
                                      boxShadow: "none",
                                    },
                                    onClick: () => {
                                      window.open(
                                        "https://dexscreener.com/solana/qnaglpknyzntf5ijhdki9prgodgra5bnadacgecdsjw",
                                        "_blank",
                                        "noopener,noreferrer"
                                      );
                                    },
                                    onMouseEnter: (e) => {
                                      (e.currentTarget.style.backgroundColor =
                                        "#e66400"),
                                        (e.currentTarget.style.boxShadow =
                                          "0 4px 12px rgba(255, 111, 0, 0.4)");
                                    },
                                    onMouseLeave: (e) => {
                                      (e.currentTarget.style.backgroundColor =
                                        "#ff6f00"),
                                        (e.currentTarget.style.boxShadow =
                                          "none");
                                    },
                                    children: "ENTER THE WAR",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "inline-block",
                                  transition:
                                    "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                },
                                onMouseEnter: (e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1.05) translateY(-2px)";
                                },
                                onMouseLeave: (e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1) translateY(0)";
                                },
                                children: [
                                  (0, r.jsx)("svg", {
                                    style: {
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "100%",
                                      height: "100%",
                                      pointerEvents: "none",
                                      zIndex: 1,
                                      overflow: "visible",
                                    },
                                    viewBox: "0 0 200 50",
                                    preserveAspectRatio: "none",
                                    children: (0, r.jsx)("path", {
                                      d: "M0 0 L200 0 L200 34 L184 50 L0 50 L0 0 Z",
                                      fill: "none",
                                      stroke: "#a1a1aa",
                                      strokeWidth: "2",
                                      strokeLinecap: "square",
                                      strokeLinejoin: "miter",
                                    }),
                                  }),
                                  (0, r.jsx)("button", {
                                    style: {
                                      padding:
                                        "clamp(14px, 2.2vw, 18px) clamp(28px, 4.5vw, 40px)",
                                      fontSize: "clamp(12px, 2vw, 16px)",
                                      color: "#FFFFFF",
                                      backgroundColor: "#1b1b1b",
                                      border: "none",
                                      borderRadius: 0,
                                      cursor: "pointer",
                                      textTransform: "uppercase",
                                      letterSpacing: "1.5px",
                                      fontFamily: "Liberator, sans-serif",
                                      fontWeight: 700,
                                      clipPath:
                                        "polygon(0% 0%, 100% 0%, 100% 68%, 92% 100%, 0% 100%)",
                                      transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                      minHeight: "48px",
                                      minWidth: "140px",
                                      position: "relative",
                                      zIndex: 0,
                                      boxShadow:
                                        "0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
                                    },
                                    onClick: () => {
                                      window.open(
                                        "https://x.com/i/communities/2015899639397101613",
                                        "_blank",
                                        "noopener,noreferrer"
                                      );
                                    },
                                    onMouseEnter: (e) => {
                                      (e.currentTarget.style.backgroundColor =
                                        "#262626"),
                                        (e.currentTarget.style.boxShadow =
                                          "0 4px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)");
                                    },
                                    onMouseLeave: (e) => {
                                      (e.currentTarget.style.backgroundColor =
                                        "#1b1b1b"),
                                        (e.currentTarget.style.boxShadow =
                                          "0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)");
                                    },
                                    children: "JOIN THE FRONTLINE",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    style: {
                      width: "100%",
                      height: "4px",
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0) 0%, #ff6f00 20%, #ff6f00 80%, rgba(255,255,255,0) 100%)",
                      flexShrink: 0,
                    },
                  }),
                  (0, r.jsx)("section", {
                    style: {
                      width: "100%",
                      maxWidth: "100%",
                      padding:
                        "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 40px) 0",
                      background:
                        "linear-gradient(180deg, #1b1b1b 0%, #000 100%)",
                      position: "relative",
                      zIndex: 4,
                      boxSizing: "border-box",
                    },
                    children: (0, r.jsxs)("div", {
                      style: {
                        width: "100%",
                        boxSizing: "border-box",
                        padding: 0,
                      },
                      children: [
                        (0, r.jsx)("h2", {
                          style: {
                            color: "#FFF",
                            fontFamily: "Liberator",
                            fontSize: "clamp(2.5rem, 8vw, 6rem)",
                            fontStyle: "normal",
                            fontWeight: 410,
                            lineHeight: "1.1",
                            textAlign: "center",
                            marginBottom: "clamp(32px, 6vw, 60px)",
                            width: "100%",
                            maxWidth: "100%",
                            boxSizing: "border-box",
                            overflowWrap: "break-word",
                            wordBreak: "break-word",
                            padding: 0,
                            marginLeft: "auto",
                            marginRight: "auto",
                          },
                          children: "WAR IS",
                        }),
                        (0, r.jsxs)("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: "clamp(24px, 4vw, 40px)",
                            width: "100%",
                            maxWidth: "100%",
                            boxSizing: "border-box",
                            padding: 0,
                          },
                          className: "war-is-grid",
                          children: [
                            (0, r.jsx)("div", {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                cursor: "pointer",
                                transition: "transform 0.3s ease-out",
                                width: "100%",
                                maxWidth: "100%",
                                minWidth: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                margin: 0,
                              },
                              onMouseEnter: (e) => {
                                e.currentTarget.style.transform =
                                  "scale(1.02) translateY(-4px)";
                              },
                              onMouseLeave: (e) => {
                                e.currentTarget.style.transform =
                                  "scale(1) translateY(0)";
                              },
                              children: (0, r.jsx)("div", {
                                className: "war-card-border",
                                style: {
                                  width: "100%",
                                  aspectRatio: "1 / 1",
                                  position: "relative",
                                  background:
                                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 100%)",
                                  padding: "0.5px",
                                  transition: "all 0.3s ease-out",
                                },
                                onMouseEnter: (e) => {
                                  (e.currentTarget.style.background =
                                    "linear-gradient(180deg, rgba(255, 111, 0, 0.4) 0%, rgba(255, 111, 0, 0) 100%)"),
                                    (e.currentTarget.style.boxShadow =
                                      "0 8px 24px rgba(255, 111, 0, 0.25), 0 0 0 1px rgba(255, 111, 0, 0.35)");
                                },
                                onMouseLeave: (e) => {
                                  (e.currentTarget.style.background =
                                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 100%)"),
                                    (e.currentTarget.style.boxShadow = "none");
                                },
                                children: (0, r.jsxs)("div", {
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                    background:
                                      "linear-gradient(180deg, #1b1b1b 0%, #000 100%)",
                                    position: "relative",
                                    transition: "all 0.3s ease-out",
                                  },
                                  onMouseEnter: (e) => {
                                    e.currentTarget.style.background =
                                      "linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%)";
                                    let t = e.currentTarget.querySelector(
                                        ".war-glow-commoditised"
                                      ),
                                      n = e.currentTarget.querySelector(
                                        ".card-image-commoditised"
                                      ),
                                      r = e.currentTarget.querySelector(
                                        ".camo-overlay-commoditised"
                                      );
                                    t && (t.style.opacity = "1"),
                                      r && (r.style.opacity = "0.3"),
                                      n &&
                                        ((n.style.filter =
                                          "grayscale(100%) brightness(0.9)"),
                                        (n.style.transform =
                                          "translate(-50%, -60%) scale(1.05)"));
                                    let i = e.currentTarget.querySelector("h3");
                                    i && (i.style.color = "#ff6f00");
                                  },
                                  onMouseLeave: (e) => {
                                    e.currentTarget.style.background =
                                      "linear-gradient(180deg, #1b1b1b 0%, #000 100%)";
                                    let t = e.currentTarget.querySelector(
                                        ".war-glow-commoditised"
                                      ),
                                      n = e.currentTarget.querySelector(
                                        ".card-image-commoditised"
                                      ),
                                      r = e.currentTarget.querySelector(
                                        ".camo-overlay-commoditised"
                                      );
                                    t && (t.style.opacity = "0"),
                                      r && (r.style.opacity = "0"),
                                      n &&
                                        ((n.style.filter =
                                          "grayscale(100%) brightness(0.7)"),
                                        (n.style.transform =
                                          "translate(-50%, -50%) scale(1)"));
                                    let i = e.currentTarget.querySelector("h3");
                                    i && (i.style.color = "#FFF");
                                  },
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "camo-overlay-commoditised",
                                      style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background:
                                          "linear-gradient(180deg, rgba(255,111,0,0.35) 0%, rgba(255,111,0,0.12) 50%, transparent 100%), url(/camo-texture.png)",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease-out",
                                        pointerEvents: "none",
                                        zIndex: 1,
                                        mixBlendMode: "overlay",
                                      },
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "card-image-commoditised",
                                      style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "50%",
                                        height: "50%",
                                        backgroundImage:
                                          "url(/commoditised-image.png)",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        filter:
                                          "grayscale(100%) brightness(0.7)",
                                        opacity: 1,
                                        transition:
                                          "filter 0.3s ease-out, transform 0.3s ease-out",
                                        zIndex: 2,
                                      },
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "war-glow-commoditised",
                                      style: {
                                        position: "absolute",
                                        bottom: "10%",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "90%",
                                        height: "50%",
                                        background:
                                          "radial-gradient(ellipse at center, rgba(255, 111, 0, 0.4) 0%, rgba(255, 111, 0, 0.3) 30%, rgba(255, 111, 0, 0.2) 50%, transparent 100%)",
                                        filter: "blur(30px)",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease-out",
                                        pointerEvents: "none",
                                        zIndex: 1,
                                      },
                                    }),
                                    (0, r.jsx)("div", {
                                      style: {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "clamp(80px, 15vw, 120px)",
                                        background:
                                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%)",
                                        pointerEvents: "none",
                                        zIndex: 1,
                                      },
                                    }),
                                    (0, r.jsx)("h3", {
                                      style: {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        color: "#FFF",
                                        fontFamily: "Liberator",
                                        fontSize: "clamp(1.5rem, 4vw, 3rem)",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "normal",
                                        margin: 0,
                                        padding: "clamp(12px, 2vw, 20px)",
                                        zIndex: 2,
                                      },
                                      children: "COMMODITISED",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%",
                                maxWidth: "100%",
                                minWidth: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                margin: 0,
                              },
                              children: [
                                (0, r.jsx)("div", {
                                  className: "war-card-border",
                                  style: {
                                    width: "100%",
                                    maxWidth: "100%",
                                    aspectRatio: "1 / 1",
                                    position: "relative",
                                    background:
                                      "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 100%)",
                                    padding: "0.5px",
                                    transition: "all 0.3s ease-out",
                                    cursor: "pointer",
                                    boxSizing: "border-box",
                                    minWidth: 0,
                                  },
                                  onMouseEnter: (e) => {
                                    (e.currentTarget.style.background =
                                      "linear-gradient(180deg, rgba(255, 111, 0, 0.4) 0%, rgba(255, 111, 0, 0) 100%)"),
                                      (e.currentTarget.style.boxShadow =
                                        "0 8px 24px rgba(255, 111, 0, 0.25), 0 0 0 1px rgba(255, 111, 0, 0.35)"),
                                      (e.currentTarget.style.transform =
                                        "scale(1.02) translateY(-4px)");
                                  },
                                  onMouseLeave: (e) => {
                                    (e.currentTarget.style.background =
                                      "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 100%)"),
                                      (e.currentTarget.style.boxShadow =
                                        "none"),
                                      (e.currentTarget.style.transform =
                                        "scale(1) translateY(0)");
                                  },
                                  children: (0, r.jsxs)("div", {
                                    style: {
                                      width: "100%",
                                      height: "100%",
                                      background:
                                        "linear-gradient(180deg, #1b1b1b 0%, #000 100%)",
                                      position: "relative",
                                      transition: "all 0.3s ease-out",
                                    },
                                    onMouseEnter: (e) => {
                                      e.currentTarget.style.background =
                                        "linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%)";
                                      let t = e.currentTarget.querySelector(
                                          ".war-glow-broadcast"
                                        ),
                                        n = e.currentTarget.querySelector(
                                          ".card-image-broadcast"
                                        ),
                                        r = e.currentTarget.querySelector(
                                          ".camo-overlay-broadcast"
                                        );
                                      t && (t.style.opacity = "1"),
                                        r && (r.style.opacity = "0.3"),
                                        n &&
                                          ((n.style.filter =
                                            "grayscale(100%) brightness(0.9)"),
                                          (n.style.transform =
                                            "translate(-50%, -60%) scale(1.05)"));
                                      let i =
                                        e.currentTarget.querySelector("h3");
                                      i && (i.style.color = "#ff6f00");
                                    },
                                    onMouseLeave: (e) => {
                                      e.currentTarget.style.background =
                                        "linear-gradient(180deg, #1b1b1b 0%, #000 100%)";
                                      let t = e.currentTarget.querySelector(
                                          ".war-glow-broadcast"
                                        ),
                                        n = e.currentTarget.querySelector(
                                          ".card-image-broadcast"
                                        ),
                                        r = e.currentTarget.querySelector(
                                          ".camo-overlay-broadcast"
                                        );
                                      t && (t.style.opacity = "0"),
                                        r && (r.style.opacity = "0"),
                                        n &&
                                          ((n.style.filter =
                                            "grayscale(100%) brightness(0.7)"),
                                          (n.style.transform =
                                            "translate(-50%, -50%) scale(1)"));
                                      let i =
                                        e.currentTarget.querySelector("h3");
                                      i && (i.style.color = "#FFF");
                                    },
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "camo-overlay-broadcast",
                                        style: {
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          width: "100%",
                                          height: "100%",
                                          background:
                                            "linear-gradient(180deg, rgba(255,111,0,0.35) 0%, rgba(255,111,0,0.12) 50%, transparent 100%), url(/camo-texture.png)",
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                          opacity: 0,
                                          transition: "opacity 0.3s ease-out",
                                          pointerEvents: "none",
                                          zIndex: 1,
                                          mixBlendMode: "overlay",
                                        },
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "card-image-broadcast",
                                        style: {
                                          position: "absolute",
                                          top: "50%",
                                          left: "50%",
                                          transform: "translate(-50%, -50%)",
                                          width: "50%",
                                          height: "50%",
                                          backgroundImage:
                                            "url(/broadcast-image.png)",
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                          filter:
                                            "grayscale(100%) brightness(0.7)",
                                          opacity: 1,
                                          transition:
                                            "filter 0.3s ease-out, transform 0.3s ease-out",
                                          zIndex: 2,
                                        },
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "war-glow-broadcast",
                                        style: {
                                          position: "absolute",
                                          bottom: "10%",
                                          left: "50%",
                                          transform: "translateX(-50%)",
                                          width: "90%",
                                          height: "50%",
                                          background:
                                            "radial-gradient(ellipse at center, rgba(255, 111, 0, 0.4) 0%, rgba(255, 111, 0, 0.3) 30%, rgba(255, 111, 0, 0.2) 50%, transparent 100%)",
                                          filter: "blur(30px)",
                                          opacity: 0,
                                          transition: "opacity 0.3s ease-out",
                                          pointerEvents: "none",
                                          zIndex: 1,
                                        },
                                      }),
                                      (0, r.jsx)("div", {
                                        style: {
                                          position: "absolute",
                                          bottom: 0,
                                          left: 0,
                                          width: "100%",
                                          height: "clamp(80px, 15vw, 120px)",
                                          background:
                                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%)",
                                          pointerEvents: "none",
                                          zIndex: 1,
                                        },
                                      }),
                                      (0, r.jsx)("h3", {
                                        style: {
                                          position: "absolute",
                                          bottom: 0,
                                          left: 0,
                                          color: "#FFF",
                                          fontFamily: "Liberator",
                                          fontSize: "clamp(1.5rem, 4vw, 3rem)",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          lineHeight: "normal",
                                          margin: 0,
                                          padding: "clamp(12px, 2vw, 20px)",
                                          zIndex: 2,
                                        },
                                        children: "BROADCAST",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsxs)("p", {
                                  className:
                                    "you-are-early you-are-early--desktop",
                                  style: {
                                    color: "#FFF",
                                    fontFamily: "Liberator",
                                    fontSize: "clamp(1.5rem, 4vw, 3rem)",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "normal",
                                    textAlign: "center",
                                    margin: "clamp(32px, 5vw, 60px) 0 0 0",
                                  },
                                  children: [
                                    "YOU ARE ",
                                    (0, r.jsx)("span", {
                                      style: {
                                        color: "#ff6f00",
                                        textDecorationLine: "underline",
                                        textDecorationStyle: "solid",
                                        textDecorationSkipInk: "auto",
                                        textDecorationThickness: "auto",
                                        textUnderlineOffset: "auto",
                                        textUnderlinePosition: "from-font",
                                      },
                                      children: "EARLY",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                cursor: "pointer",
                                transition: "transform 0.3s ease-out",
                                width: "100%",
                                maxWidth: "100%",
                                minWidth: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                margin: 0,
                              },
                              onMouseEnter: (e) => {
                                e.currentTarget.style.transform =
                                  "scale(1.02) translateY(-4px)";
                              },
                              onMouseLeave: (e) => {
                                e.currentTarget.style.transform =
                                  "scale(1) translateY(0)";
                              },
                              children: (0, r.jsx)("div", {
                                className: "war-card-border",
                                style: {
                                  width: "100%",
                                  maxWidth: "100%",
                                  aspectRatio: "1 / 1",
                                  position: "relative",
                                  background:
                                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 100%)",
                                  padding: "0.5px",
                                  transition: "all 0.3s ease-out",
                                  boxSizing: "border-box",
                                  minWidth: 0,
                                },
                                onMouseEnter: (e) => {
                                  (e.currentTarget.style.background =
                                    "linear-gradient(180deg, rgba(255, 111, 0, 0.4) 0%, rgba(255, 111, 0, 0) 100%)"),
                                    (e.currentTarget.style.boxShadow =
                                      "0 8px 24px rgba(255, 111, 0, 0.25), 0 0 0 1px rgba(255, 111, 0, 0.35)");
                                },
                                onMouseLeave: (e) => {
                                  (e.currentTarget.style.background =
                                    "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0) 100%)"),
                                    (e.currentTarget.style.boxShadow = "none");
                                },
                                children: (0, r.jsxs)("div", {
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                    background:
                                      "linear-gradient(180deg, #1b1b1b 0%, #000 100%)",
                                    position: "relative",
                                    transition: "all 0.3s ease-out",
                                  },
                                  onMouseEnter: (e) => {
                                    e.currentTarget.style.background =
                                      "linear-gradient(180deg, #1f1f1f 0%, #0a0a0a 100%)";
                                    let t =
                                        e.currentTarget.querySelector(
                                          ".war-glow-traded"
                                        ),
                                      n =
                                        e.currentTarget.querySelector(
                                          ".card-image-traded"
                                        ),
                                      r = e.currentTarget.querySelector(
                                        ".camo-overlay-traded"
                                      );
                                    t && (t.style.opacity = "1"),
                                      r && (r.style.opacity = "0.3"),
                                      n &&
                                        ((n.style.filter =
                                          "grayscale(100%) brightness(0.9)"),
                                        (n.style.transform =
                                          "translate(-50%, -60%) scale(1.05)"));
                                    let i = e.currentTarget.querySelector("h3");
                                    i && (i.style.color = "#ff6f00");
                                  },
                                  onMouseLeave: (e) => {
                                    e.currentTarget.style.background =
                                      "linear-gradient(180deg, #1b1b1b 0%, #000 100%)";
                                    let t =
                                        e.currentTarget.querySelector(
                                          ".war-glow-traded"
                                        ),
                                      n =
                                        e.currentTarget.querySelector(
                                          ".card-image-traded"
                                        ),
                                      r = e.currentTarget.querySelector(
                                        ".camo-overlay-traded"
                                      );
                                    t && (t.style.opacity = "0"),
                                      r && (r.style.opacity = "0"),
                                      n &&
                                        ((n.style.filter =
                                          "grayscale(100%) brightness(0.7)"),
                                        (n.style.transform =
                                          "translate(-50%, -50%) scale(1)"));
                                    let i = e.currentTarget.querySelector("h3");
                                    i && (i.style.color = "#FFF");
                                  },
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "camo-overlay-traded",
                                      style: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background:
                                          "linear-gradient(180deg, rgba(255,111,0,0.35) 0%, rgba(255,111,0,0.12) 50%, transparent 100%), url(/camo-texture.png)",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease-out",
                                        pointerEvents: "none",
                                        zIndex: 1,
                                        mixBlendMode: "overlay",
                                      },
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "card-image-traded",
                                      style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: "50%",
                                        height: "50%",
                                        backgroundImage:
                                          "url(/traded-image.png)",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        filter:
                                          "grayscale(100%) brightness(0.7)",
                                        opacity: 1,
                                        transition:
                                          "filter 0.3s ease-out, transform 0.3s ease-out",
                                        zIndex: 2,
                                      },
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "war-glow-traded",
                                      style: {
                                        position: "absolute",
                                        bottom: "10%",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "90%",
                                        height: "50%",
                                        background:
                                          "radial-gradient(ellipse at center, rgba(255, 111, 0, 0.4) 0%, rgba(255, 111, 0, 0.3) 30%, rgba(255, 111, 0, 0.2) 50%, transparent 100%)",
                                        filter: "blur(30px)",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease-out",
                                        pointerEvents: "none",
                                        zIndex: 1,
                                      },
                                    }),
                                    (0, r.jsx)("div", {
                                      style: {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "clamp(80px, 15vw, 120px)",
                                        background:
                                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%)",
                                        pointerEvents: "none",
                                        zIndex: 1,
                                      },
                                    }),
                                    (0, r.jsx)("h3", {
                                      style: {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        color: "#FFF",
                                        fontFamily: "Liberator",
                                        fontSize: "clamp(1.5rem, 4vw, 3rem)",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "normal",
                                        margin: 0,
                                        padding: "clamp(12px, 2vw, 20px)",
                                        zIndex: 2,
                                      },
                                      children: "TRADED",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className: "you-are-early you-are-early--mobile",
                          style: {
                            color: "#FFF",
                            fontFamily: "Liberator",
                            fontSize: "clamp(2rem, 6vw, 3rem)",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            textAlign: "center",
                            margin: "clamp(32px, 5vw, 60px) 0 0 0",
                          },
                          children: [
                            "YOU ARE",
                            " ",
                            (0, r.jsx)("span", {
                              style: {
                                color: "#ff6f00",
                                textDecorationLine: "underline",
                                textDecorationStyle: "solid",
                                textDecorationSkipInk: "auto",
                                textDecorationThickness: "auto",
                                textUnderlineOffset: "auto",
                                textUnderlinePosition: "from-font",
                              },
                              children: "EARLY",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("section", {
                    "aria-label": "Section divider",
                    style: {
                      width: "100%",
                      maxWidth: "100%",
                      padding: 0,
                      backgroundColor: "#000000",
                      position: "relative",
                      zIndex: 4,
                      boxSizing: "border-box",
                    },
                    children: (0, r.jsx)("div", {
                      style: {
                        width: "100%",
                        marginTop: 0,
                        marginBottom: 0,
                        paddingTop: "clamp(56px, 10vw, 96px)",
                        lineHeight: 0,
                        overflow: "hidden",
                      },
                      children: (0, r.jsx)("video", {
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        "aria-hidden": !0,
                        style: {
                          width: "100%",
                          height: "auto",
                          display: "block",
                          objectFit: "cover",
                          objectPosition: "center bottom",
                          marginBottom: "-6px",
                        },
                        children: (0, r.jsx)("source", {
                          src: "/u1476882918_httpss.mj.runfOlSLlFOmjw_planes_coming_in_to_land_541a3cf9-0dd0-4358-b925-e7dec5e0b5b3_0.mp4",
                          type: "video/mp4",
                        }),
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    style: {
                      width: "100%",
                      height: "4px",
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0) 0%, #ff6f00 20%, #ff6f00 80%, rgba(255,255,255,0) 100%)",
                      flexShrink: 0,
                    },
                  }),
                  (0, r.jsxs)("section", {
                    style: {
                      width: "100%",
                      maxWidth: "100%",
                      padding: "clamp(56px, 8vw, 96px) clamp(16px, 6vw, 96px)",
                      backgroundColor: "#1b1b1b",
                      position: "relative",
                      zIndex: 4,
                      boxSizing: "border-box",
                      overflow: "hidden",
                    },
                    children: [
                      (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "1px",
                          background:
                            "linear-gradient(90deg, rgba(255,255,255,0) 0%, #ff6f00 50%, rgba(255,255,255,0) 100%)",
                          pointerEvents: "none",
                          zIndex: 3,
                        },
                      }),
                      (0, r.jsx)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "1px",
                          background:
                            "linear-gradient(90deg, rgba(255,255,255,0) 0%, #ff6f00 50%, rgba(255,255,255,0) 100%)",
                          pointerEvents: "none",
                          zIndex: 3,
                        },
                      }),
                      (0, r.jsxs)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          zIndex: 0,
                        },
                        children: [
                          (0, r.jsx)("img", {
                            src: "/airbase.jpg",
                            alt: "",
                            style: {
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              opacity: 0.55,
                              filter: "grayscale(100%)",
                            },
                          }),
                          (0, r.jsx)("div", {
                            style: {
                              position: "absolute",
                              inset: 0,
                              background:
                                "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 100%)",
                            },
                          }),
                        ],
                      }),
                      (0, r.jsxs)("h2", {
                        style: {
                          position: "relative",
                          zIndex: 1,
                          color: "#FFFFFF",
                          fontFamily: "Liberator, sans-serif",
                          fontSize: "clamp(3rem, 7vw, 6rem)",
                          fontWeight: 410,
                          letterSpacing: "clamp(2px, 0.3vw, 4px)",
                          textTransform: "uppercase",
                          textAlign: "center",
                          margin: 0,
                          marginBottom: "clamp(24px, 4vw, 48px)",
                          lineHeight: 1,
                        },
                        children: [
                          "IT'S ",
                          (0, r.jsx)("span", {
                            style: { color: "#ff6f00" },
                            children: "HAPPENING",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "its-happening-columns",
                        style: {
                          position: "relative",
                          zIndex: 1,
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          gap: "clamp(24px, 4vw, 48px)",
                          boxSizing: "border-box",
                        },
                        children: [
                          (0, r.jsxs)("div", {
                            style: {
                              flex: 1,
                              minWidth: 0,
                              display: "flex",
                              flexDirection: "column",
                              gap: "clamp(24px, 4vw, 48px)",
                            },
                            children: [
                              (0, r.jsx)(d, {
                                url: "https://x.com/IRIran_Military/status/2019155484381749645",
                                theme: "dark",
                              }),
                              (0, r.jsx)(d, {
                                url: "https://x.com/CGTNOfficial/status/2016488560216744290?s=20",
                                theme: "dark",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            style: {
                              flex: 1,
                              minWidth: 0,
                              display: "flex",
                              flexDirection: "column",
                              gap: "clamp(24px, 4vw, 48px)",
                            },
                            children: [
                              (0, r.jsx)(d, {
                                url: "https://twitter.com/mellometrics/status/2014138905562366011",
                                theme: "dark",
                              }),
                              (0, r.jsx)(d, {
                                url: "https://twitter.com/DeptofWar/status/2004351717131903272",
                                theme: "dark",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    style: {
                      width: "100%",
                      height: "4px",
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0) 0%, #ff6f00 20%, #ff6f00 80%, rgba(255,255,255,0) 100%)",
                      flexShrink: 0,
                    },
                  }),
                  (0, r.jsxs)("section", {
                    ref: e,
                    className: "join-forces-section",
                    style: {
                      width: "100%",
                      maxWidth: "100%",
                      padding: "clamp(56px, 8vw, 96px) clamp(16px, 6vw, 96px)",
                      backgroundColor: "#000000",
                      position: "relative",
                      zIndex: 4,
                      boxSizing: "border-box",
                      overflow: "hidden",
                    },
                    children: [
                      (0, r.jsxs)("div", {
                        "aria-hidden": !0,
                        style: {
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          zIndex: 0,
                        },
                        children: [
                          (0, r.jsx)("video", {
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            preload: "auto",
                            poster: "/join-the-forces-bg.png",
                            style: {
                              position: "absolute",
                              inset: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              filter:
                                "grayscale(100%) contrast(1.05) brightness(0.55)",
                            },
                            children: (0, r.jsx)("source", {
                              src: "/u1476882918_httpss.mj.runfOlSLlFOmjw_planes_coming_in_to_land_541a3cf9-0dd0-4358-b925-e7dec5e0b5b3_0.mp4",
                              type: "video/mp4",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            style: {
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(27,27,27,0.85) 45%, rgba(27,27,27,0.4) 100%)",
                            },
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "join-forces-inner",
                        style: {
                          position: "relative",
                          zIndex: 1,
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "clamp(32px, 6vw, 96px)",
                          boxSizing: "border-box",
                        },
                        children: [
                          (0, r.jsxs)("h2", {
                            style: {
                              margin: 0,
                              color: "#FFFFFF",
                              fontFamily: "Liberator, sans-serif",
                              fontSize: "clamp(2.5rem, 6vw, 6rem)",
                              fontWeight: 410,
                              textTransform: "uppercase",
                              letterSpacing: "clamp(2px, 0.35vw, 4px)",
                              lineHeight: 1,
                            },
                            children: [
                              "JOIN ",
                              (0, r.jsx)("span", {
                                style: { color: "#ff6f00" },
                                children: "THE FORCES",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "clamp(32px, 6vw, 96px)",
                              width: "100%",
                              maxWidth: "min(680px, 90vw)",
                            },
                            children: [
                              (0, r.jsx)("div", {
                                style: {
                                  display: "flex",
                                  alignItems: "flex-end",
                                },
                                children: (0, r.jsxs)("div", {
                                  style: {
                                    color: "#FFFFFF",
                                    fontFamily: "Liberator, sans-serif",
                                  },
                                  children: [
                                    (0, r.jsx)("div", {
                                      style: {
                                        marginTop: "clamp(8px, 1.2vw, 16px)",
                                        fontSize:
                                          "clamp(1.25rem, 3vw, 3.375rem)",
                                        fontWeight: 300,
                                        letterSpacing: "clamp(2px, 0.5vw, 3px)",
                                        textTransform: "uppercase",
                                        opacity: 0.95,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "clamp(20px, 4vw, 48px)",
                                },
                                children: [
                                  (0, r.jsxs)("a", {
                                    href: "https://t.me/waroneth",
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "clamp(10px, 2vw, 18px)",
                                      textDecoration: "none",
                                      width: "fit-content",
                                      maxWidth: "100%",
                                      cursor: "pointer",
                                      transition:
                                        "transform 0.25s ease, opacity 0.25s ease, filter 0.25s ease",
                                      opacity: 0.95,
                                    },
                                    onMouseEnter: (e) => {
                                      (e.currentTarget.style.transform =
                                        "translateX(6px)"),
                                        (e.currentTarget.style.opacity = "1"),
                                        (e.currentTarget.style.filter =
                                          "drop-shadow(0 10px 24px rgba(0,0,0,0.45))");
                                      let t = e.currentTarget.querySelector(
                                        ".join-forces-link-text"
                                      );
                                      t && (t.style.color = "#ff6f00");
                                      let n =
                                        e.currentTarget.querySelector("img");
                                      n &&
                                        (n.style.filter =
                                          "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(1deg) brightness(102%) contrast(101%)");
                                    },
                                    onMouseLeave: (e) => {
                                      (e.currentTarget.style.transform =
                                        "translateX(0)"),
                                        (e.currentTarget.style.opacity =
                                          "0.95"),
                                        (e.currentTarget.style.filter = "none");
                                      let t = e.currentTarget.querySelector(
                                        ".join-forces-link-text"
                                      );
                                      t && (t.style.color = "#FFFFFF");
                                      let n =
                                        e.currentTarget.querySelector("img");
                                      n && (n.style.filter = "none");
                                    },
                                    children: [
                                      (0, r.jsx)("div", {
                                        style: {
                                          width: "clamp(28px, 5vw, 48px)",
                                          height: "clamp(28px, 5vw, 48px)",
                                          aspectRatio: "1 / 1",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          flexShrink: 0,
                                        },
                                        children: (0, r.jsx)("img", {
                                          src: "/icon-telegram.png",
                                          alt: "",
                                          style: {
                                            width: "100%",
                                            height: "100%",
                                            display: "block",
                                            objectFit: "contain",
                                            transition: "filter 0.25s ease",
                                          },
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "join-forces-link-text",
                                        style: {
                                          color: "#FFFFFF",
                                          fontFamily: "Liberator, sans-serif",
                                          fontSize:
                                            "clamp(1.25rem, 3.2vw, 3.375rem)",
                                          fontWeight: 410,
                                          textTransform: "uppercase",
                                          letterSpacing:
                                            "clamp(1px, 0.25vw, 2px)",
                                          lineHeight: 1,
                                          transition: "color 0.25s ease",
                                        },
                                        children: "Telegram",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("a", {
                                    href: "https://dexscreener.com/solana/qnaglpknyzntf5ijhdki9prgodgra5bnadacgecdsjw",
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "clamp(10px, 2vw, 18px)",
                                      textDecoration: "none",
                                      width: "fit-content",
                                      maxWidth: "100%",
                                      cursor: "pointer",
                                      transition:
                                        "transform 0.25s ease, opacity 0.25s ease, filter 0.25s ease",
                                      opacity: 0.95,
                                    },
                                    onMouseEnter: (e) => {
                                      (e.currentTarget.style.transform =
                                        "translateX(6px)"),
                                        (e.currentTarget.style.opacity = "1"),
                                        (e.currentTarget.style.filter =
                                          "drop-shadow(0 10px 24px rgba(0,0,0,0.45))");
                                      let t = e.currentTarget.querySelector(
                                        ".join-forces-link-text"
                                      );
                                      t && (t.style.color = "#ff6f00");
                                      let n =
                                        e.currentTarget.querySelector("img");
                                      n &&
                                        (n.style.filter =
                                          "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(1deg) brightness(102%) contrast(101%)");
                                    },
                                    onMouseLeave: (e) => {
                                      (e.currentTarget.style.transform =
                                        "translateX(0)"),
                                        (e.currentTarget.style.opacity =
                                          "0.95"),
                                        (e.currentTarget.style.filter = "none");
                                      let t = e.currentTarget.querySelector(
                                        ".join-forces-link-text"
                                      );
                                      t && (t.style.color = "#FFFFFF");
                                      let n =
                                        e.currentTarget.querySelector("img");
                                      n && (n.style.filter = "none");
                                    },
                                    children: [
                                      (0, r.jsx)("div", {
                                        style: {
                                          width: "clamp(28px, 5vw, 48px)",
                                          height: "clamp(28px, 5vw, 48px)",
                                          aspectRatio: "1 / 1",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          flexShrink: 0,
                                        },
                                        children: (0, r.jsx)("img", {
                                          src: "/icon-dexscreener.svg",
                                          alt: "",
                                          style: {
                                            width: "100%",
                                            height: "100%",
                                            display: "block",
                                            objectFit: "contain",
                                            transition: "filter 0.25s ease",
                                          },
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "join-forces-link-text",
                                        style: {
                                          color: "#FFFFFF",
                                          fontFamily: "Liberator, sans-serif",
                                          fontSize:
                                            "clamp(1.25rem, 3.2vw, 3.375rem)",
                                          fontWeight: 410,
                                          textTransform: "uppercase",
                                          letterSpacing:
                                            "clamp(1px, 0.25vw, 2px)",
                                          lineHeight: 1,
                                          transition: "color 0.25s ease",
                                        },
                                        children: "DEXSCREENER",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("a", {
                                    href: "https://x.com/waroneth",
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "clamp(10px, 2vw, 18px)",
                                      textDecoration: "none",
                                      width: "fit-content",
                                      maxWidth: "100%",
                                      cursor: "pointer",
                                      transition:
                                        "transform 0.25s ease, opacity 0.25s ease, filter 0.25s ease",
                                      opacity: 0.95,
                                    },
                                    onMouseEnter: (e) => {
                                      (e.currentTarget.style.transform =
                                        "translateX(6px)"),
                                        (e.currentTarget.style.opacity = "1"),
                                        (e.currentTarget.style.filter =
                                          "drop-shadow(0 10px 24px rgba(0,0,0,0.45))");
                                      let t = e.currentTarget.querySelector(
                                        ".join-forces-link-text"
                                      );
                                      t && (t.style.color = "#ff6f00");
                                      let n =
                                        e.currentTarget.querySelector("img");
                                      n &&
                                        (n.style.filter =
                                          "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(1deg) brightness(102%) contrast(101%)");
                                    },
                                    onMouseLeave: (e) => {
                                      (e.currentTarget.style.transform =
                                        "translateX(0)"),
                                        (e.currentTarget.style.opacity =
                                          "0.95"),
                                        (e.currentTarget.style.filter = "none");
                                      let t = e.currentTarget.querySelector(
                                        ".join-forces-link-text"
                                      );
                                      t && (t.style.color = "#FFFFFF");
                                      let n =
                                        e.currentTarget.querySelector("img");
                                      n && (n.style.filter = "none");
                                    },
                                    children: [
                                      (0, r.jsx)("div", {
                                        style: {
                                          width: "clamp(28px, 5vw, 48px)",
                                          height: "clamp(28px, 5vw, 48px)",
                                          aspectRatio: "1 / 1",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          flexShrink: 0,
                                        },
                                        children: (0, r.jsx)("img", {
                                          src: "/icon-community.svg",
                                          alt: "",
                                          style: {
                                            width: "100%",
                                            height: "100%",
                                            display: "block",
                                            objectFit: "contain",
                                            transition: "filter 0.25s ease",
                                          },
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "join-forces-link-text",
                                        style: {
                                          color: "#FFFFFF",
                                          fontFamily: "Liberator, sans-serif",
                                          fontSize:
                                            "clamp(1.25rem, 3.2vw, 3.375rem)",
                                          fontWeight: 410,
                                          textTransform: "uppercase",
                                          letterSpacing:
                                            "clamp(1px, 0.25vw, 2px)",
                                          lineHeight: 1,
                                          transition: "color 0.25s ease",
                                        },
                                        children: "Twitter",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    style: {
                      width: "100%",
                      height: "4px",
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0) 0%, #ff6f00 20%, #ff6f00 80%, rgba(255,255,255,0) 100%)",
                      flexShrink: 0,
                    },
                  }),
                  (0, r.jsxs)("section", {
                    "aria-label": "Exchanges teaser",
                    style: {
                      width: "100%",
                      maxWidth: "100%",
                      padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 48px)",
                      backgroundColor: "#0a0a0a",
                      borderTop: "1px solid rgba(255,111,0,0.2)",
                      borderBottom: "1px solid rgba(255,111,0,0.2)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "clamp(12px, 2vw, 20px)",
                      position: "relative",
                      zIndex: 5,
                      boxSizing: "border-box",
                    },
                    children: [
                      (0, r.jsx)("div", {
                        style: {
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)",
                          letterSpacing: "0.2em",
                          color: "rgba(255,255,255,0.6)",
                          textTransform: "uppercase",
                        },
                        children: "Exchanges",
                      }),
                      (0, r.jsx)("p", {
                        className: "redacted-glitch",
                        style: {
                          margin: 0,
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: "clamp(2.25rem, 6vw, 4rem)",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          color: "#ff6f00",
                          textTransform: "uppercase",
                          position: "relative",
                        },
                        children: "REDACTED",
                      }),
                    ],
                  }),
                  (0, r.jsx)("footer", {
                    className: "footer-root",
                    style: {
                      width: "100%",
                      maxWidth: "100%",
                      padding:
                        "clamp(128px, 22vw, 240px) clamp(24px, 6vw, 64px) clamp(64px, 12vw, 120px)",
                      backgroundImage: "url(/oil-footer.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center bottom",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#000000",
                      position: "relative",
                      zIndex: 5,
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    },
                    children: (0, r.jsxs)("div", {
                      className: "footer-inner",
                      style: {
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "clamp(24px, 4vw, 40px)",
                      },
                      children: [
                        (0, r.jsxs)("p", {
                          style: {
                            color: "#FFF",
                            textAlign: "center",
                            fontFamily: "Liberator",
                            fontSize: "clamp(3rem, 8vw, 6rem)",
                            fontStyle: "normal",
                            fontWeight: 410,
                            lineHeight: "normal",
                            margin: 0,
                            padding: "0 clamp(20px, 4vw, 0)",
                          },
                          children: [
                            "WAR DOES NOT END,",
                            (0, r.jsx)("br", {}),
                            "IT ",
                            (0, r.jsx)("span", {
                              style: { color: "#ff6f00" },
                              children: "ESCALATES",
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    '\n          /* Proportional scale: content scales with viewport relative to ideal 1440px */\n          .landing-root {\n            --ideal-w: 1440;\n            --scale: min(max(100vw / var(--ideal-w), 0.5), 2);\n          }\n          /* No horizontal scroll: contain all content */\n          .landing-root,\n          .landing-content-cap {\n            overflow-x: clip !important;\n            max-width: 100% !important;\n          }\n          .landing-content-cap > section,\n          .landing-content-cap > div {\n            min-width: 0 !important;\n            max-width: 100% !important;\n          }\n          /* CRITICAL: Hero video/overlay strictly viewport-bound (zoom + all screen sizes) */\n          video.landing-hero-video {\n            z-index: 0 !important;\n            position: fixed !important;\n            inset: 0 !important;\n            width: 100% !important;\n            height: 100% !important;\n            max-width: 100vw !important;\n            max-height: 100vh !important;\n            object-fit: cover !important;\n            mix-blend-mode: normal !important;\n            isolation: isolate !important;\n            transform: translateZ(0) !important;\n            will-change: auto !important;\n          }\n          \n          .landing-hero-overlay {\n            z-index: 1 !important;\n            position: fixed !important;\n            inset: 0 !important;\n            width: 100% !important;\n            height: 100% !important;\n            max-width: 100vw !important;\n            max-height: 100vh !important;\n            isolation: isolate !important;\n            transform: translateZ(0) !important;\n          }\n          \n          /* Logo and hero content: viewport-bound so no overflow when zoomed */\n          header.landing-hero-logo,\n          div.landing-hero-content {\n            z-index: 999 !important;\n            position: fixed !important;\n            left: 0 !important;\n            right: 0 !important;\n            max-width: 100vw !important;\n            mix-blend-mode: normal !important;\n            isolation: isolate !important;\n            transform: translateZ(0) !important;\n            will-change: transform !important;\n          }\n          header.landing-hero-logo {\n            top: 0 !important;\n          }\n          div.landing-hero-content {\n            bottom: 0 !important;\n          }\n          \n          /* Ensure all text in hero content is visible */\n          .landing-hero-content h1,\n          .landing-hero-content h1 *,\n          .landing-hero-content button,\n          .landing-hero-content button * {\n            color: #FFFFFF !important;\n            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.7) !important;\n            mix-blend-mode: normal !important;\n            position: relative !important;\n            z-index: 1 !important;\n          }\n          \n          /* Prevent any stacking context issues from parent containers */\n          section:first-of-type {\n            position: static !important;\n            z-index: auto !important;\n          }\n          \n          /* Ensure parent div doesn\'t interfere */\n          div[style*="position: static"] {\n            position: static !important;\n            z-index: auto !important;\n          }\n          \n          /* Force video to render first, then overlay, then content */\n          video.landing-hero-video {\n            display: block !important;\n            visibility: visible !important;\n            opacity: 1 !important;\n          }\n          \n          .landing-hero-overlay {\n            display: block !important;\n            visibility: visible !important;\n            opacity: 0.4 !important;\n          }\n          \n          .landing-hero-logo,\n          .landing-hero-content {\n            display: flex !important;\n            visibility: visible !important;\n            opacity: 1 !important;\n          }\n          \n          @keyframes pulse {\n            0%, 100% {\n              opacity: 1;\n            }\n            50% {\n              opacity: 0.3;\n            }\n          }\n\n          /* REDACTED glitch effect */\n          .redacted-glitch {\n            animation: redactedGlitch 1.8s ease-in-out infinite;\n          }\n          @keyframes redactedGlitch {\n            0%, 88%, 100% {\n              text-shadow: 0 0 0 #ff6f00;\n              transform: translate(0, 0);\n              opacity: 1;\n            }\n            89% {\n              text-shadow: -4px 0 0 #ff0040, 4px 0 0 #00fff0;\n              transform: translate(-3px, 2px);\n              opacity: 0.9;\n            }\n            90% {\n              text-shadow: 4px 0 0 #ff0040, -4px 0 0 #00fff0;\n              transform: translate(3px, -2px);\n              opacity: 0.9;\n            }\n            91% {\n              text-shadow: -3px 2px 0 #ff0040, 3px -2px 0 #00fff0;\n              transform: translate(-4px, 0);\n              opacity: 0.9;\n            }\n            92% {\n              text-shadow: 3px -2px 0 #ff0040, -3px 2px 0 #00fff0;\n              transform: translate(4px, 0);\n              opacity: 0.9;\n            }\n            93%, 99% {\n              text-shadow: 0 0 0 #ff6f00;\n              transform: translate(0, 0);\n              opacity: 1;\n            }\n          }\n          \n          /* Responsive grid for WAR IS section */\n          @media (min-width: 600px) {\n            .war-is-grid {\n              grid-template-columns: repeat(2, 1fr) !important;\n            }\n          }\n          \n          @media (min-width: 900px) {\n            .war-is-grid {\n              grid-template-columns: repeat(3, 1fr) !important;\n            }\n          }\n          \n          /* Mobile optimizations */\n          @media (max-width: 768px) {\n            .war-is-grid {\n              gap: 24px !important;\n            }\n          }\n          \n          /* Prevent unwanted horizontal overflow but allow borders to show */\n          .war-is-grid > * {\n            min-width: 0;\n            overflow: visible;\n          }\n          \n          /* Ensure card border containers can show their borders on all sides */\n          .war-card-border {\n            overflow: visible !important;\n          }\n          \n          /* Ensure all images and backgrounds respect container */\n          .war-is-grid img,\n          .war-is-grid [style*="background"] {\n            max-width: 100%;\n            height: auto;\n          }\n\n          /* IT\'S HAPPENING: two columns, stack on small screens */\n          .its-happening-columns {\n            flex-wrap: wrap;\n          }\n\n          /* JOIN THE FORCES: vertically center copy on mobile */\n          @media (max-width: 768px) {\n            .join-forces-inner {\n              min-height: min(72vh, 640px);\n              justify-content: center !important;\n            }\n          }\n\n          @media (max-width: 640px) {\n            .its-happening-columns {\n              flex-direction: column !important;\n            }\n          }\n          .its-happening-columns iframe {\n            max-width: 100%;\n            /* Desaturate + deepen to remove the "blue" tint */\n            filter: saturate(0) brightness(0.85) contrast(1.15);\n          }\n\n          /* WAR IS: ensure the "YOU ARE EARLY" line is last on mobile */\n          .you-are-early--mobile {\n            display: none;\n          }\n\n          @media (max-width: 768px) {\n            .you-are-early--desktop {\n              display: none !important;\n            }\n            .you-are-early--mobile {\n              display: block !important;\n              font-size: 2.25rem !important;\n            }\n            /* War is live: smaller circle on mobile */\n            .hero-live-dot {\n              width: 0.75rem !important;\n              height: 0.75rem !important;\n            }\n          }\n\n\n          @media (max-width: 768px) {\n            .footer-root {\n              flex-direction: column;\n              align-items: stretch;\n              padding-left: 0;\n              padding-right: 0;\n              padding-bottom: 0;\n            }\n            .footer-inner {\n              padding-left: clamp(16px, 4vw, 40px);\n              padding-right: clamp(16px, 4vw, 40px);\n            }\n          }\n\n          .footer-inner {\n            display: flex !important;\n          }\n        ',
                },
              }),
            ],
          })
        );
      }
      function m() {
        let { state: e } = (0, i.m)(),
          [t, n] = (0, o.useState)(e),
          [a, s] = (0, o.useState)(!1),
          l = (0, o.useRef)(null);
        (0, o.useEffect)(() => {
          let t = l.current;
          if (!t || "landing" !== e) return;
          let n = 0,
            r = !1,
            i = () => {
              let { scrollTop: e, scrollHeight: n, clientHeight: r } = t;
              e <= 0 ? (t.scrollTop = 0) : e >= n - r && (t.scrollTop = n - r);
            },
            o = (e) => {
              let { scrollTop: n, scrollHeight: r, clientHeight: i } = t;
              return n <= 0 && e.deltaY < 0
                ? (e.preventDefault(), (t.scrollTop = 0), !1)
                : n >= r - i - 1 && e.deltaY > 0
                ? (e.preventDefault(), (t.scrollTop = r - i), !1)
                : void 0;
            },
            a = (e) => {
              (n = e.touches[0].clientY), (r = !1);
            },
            s = (e) => {
              if (!r) {
                let { scrollTop: i, scrollHeight: o, clientHeight: a } = t,
                  s = e.touches[0].clientY,
                  l = n - s;
                if ((i <= 0 && l < 0) || (i >= o - a - 1 && l > 0))
                  return e.preventDefault(), !1;
                (n = s), (r = !0);
              }
            };
          return (
            t.addEventListener("scroll", i, { passive: !0 }),
            t.addEventListener("wheel", o, { passive: !1 }),
            t.addEventListener("touchstart", a, { passive: !0 }),
            t.addEventListener("touchmove", s, { passive: !1 }),
            () => {
              t.removeEventListener("scroll", i),
                t.removeEventListener("wheel", o),
                t.removeEventListener("touchstart", a),
                t.removeEventListener("touchmove", s);
            }
          );
        }, [e]),
          (0, o.useEffect)(() => {
            if (e !== t) {
              if ("attention" === t && "letter" === e) {
                let t = setTimeout(() => {
                  n(e), s(!1);
                }, 1200);
                return () => clearTimeout(t);
              }
              if ("letter" === t && "landing" === e) {
                s(!0),
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                      n(e),
                        setTimeout(() => {
                          s(!1);
                        }, 1e3);
                    });
                  });
                return;
              }
              s(!0);
              let r = setTimeout(() => {
                n(e),
                  requestAnimationFrame(() => {
                    setTimeout(() => {
                      s(!1);
                    }, 50);
                  });
              }, 1200);
              return () => clearTimeout(r);
            }
          }, [e, t]);
        let d = () =>
          ("attention" === t && "letter" === e) ||
          ("letter" === t && "letter" === e && a)
            ? "active"
            : "letter" === t && "landing" === e && a
            ? "military-exit"
            : a && e !== t
            ? "exit"
            : a && e === t
            ? "enter"
            : "active";
        return (0, r.jsxs)("div", {
          ref: l,
          className: "global-effects-container",
          style: {
            width: "100%",
            maxWidth: "100%",
            minWidth: 0,
            height: "100vh",
            overflow: "landing" === e ? "auto" : "hidden",
            overflowX: "clip",
            overscrollBehavior: "none",
            touchAction: "pan-y",
            position: "relative",
            filter: "saturate(0.85)",
            boxSizing: "border-box",
          },
          children: [
            a && t !== e
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    ("attention" === t || "letter" === t) &&
                      (0, r.jsx)("div", {
                        className:
                          "letter" === t && "landing" === e
                            ? "military-exit"
                            : "exit",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          pointerEvents: "none",
                        },
                        children: (0, r.jsx)(c, {}),
                      }),
                    "landing" === t &&
                      (0, r.jsx)("div", {
                        className: "exit",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        children: (0, r.jsx)(p, {}),
                      }),
                    ("attention" === e || "letter" === e) &&
                      (0, r.jsx)("div", {
                        className: "enter",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          pointerEvents: "none",
                        },
                        children: (0, r.jsx)(c, {}),
                      }),
                    "landing" === e &&
                      (0, r.jsx)("div", {
                        className:
                          "letter" === t && "landing" === e
                            ? "military-enter"
                            : "enter",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity:
                            "letter" === t && "landing" === e ? 0 : void 0,
                          filter:
                            "letter" === t && "landing" === e
                              ? "brightness(0)"
                              : void 0,
                        },
                        children: (0, r.jsx)(p, {}),
                      }),
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    "attention" === t &&
                      (0, r.jsx)("div", {
                        className: d(),
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        children: (0, r.jsx)(c, {}),
                      }),
                    "landing" === t &&
                      (0, r.jsx)("div", {
                        className: d(),
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        children: (0, r.jsx)(p, {}),
                      }),
                  ],
                }),
            (0, r.jsx)("div", {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 1e3,
                background:
                  "radial-gradient(ellipse at center, transparent 0%, rgba(27, 27, 27, 0.2) 70%, rgba(0, 0, 0, 0.35) 100%)",
              },
            }),
            (0, r.jsx)("div", {
              className: "film-grain",
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 1001,
                opacity: 0.08,
                mixBlendMode: "overlay",
              },
            }),
            (0, r.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "\n          .enter {\n            animation: fadeInScale 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n          }\n          \n          .exit {\n            animation: fadeOutScale 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n          }\n          \n          .active {\n            opacity: 1;\n            transform: scale(1);\n          }\n          \n          @keyframes fadeInScale {\n            from {\n              opacity: 0;\n              transform: scale(0.96);\n            }\n            to {\n              opacity: 1;\n              transform: scale(1);\n            }\n          }\n          \n          @keyframes fadeOutScale {\n            from {\n              opacity: 1;\n              transform: scale(1);\n            }\n            to {\n              opacity: 0;\n              transform: scale(1.04);\n            }\n          }\n\n          .military-exit {\n            animation: militaryFadeOut 1s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;\n            opacity: 1;\n            filter: brightness(1);\n          }\n\n          .military-enter {\n            animation: militaryFadeIn 1s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;\n            opacity: 0;\n            filter: brightness(0);\n          }\n\n          @keyframes militaryFadeOut {\n            0% {\n              opacity: 1;\n              filter: brightness(1);\n            }\n            100% {\n              opacity: 0;\n              filter: brightness(0);\n            }\n          }\n\n          @keyframes militaryFadeIn {\n            0% {\n              opacity: 0;\n              filter: brightness(0);\n            }\n            100% {\n              opacity: 1;\n              filter: brightness(1);\n            }\n          }\n          \n          .military-exit,\n          .military-enter {\n            will-change: opacity, filter;\n          }\n\n          .film-grain {\n            background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\");\n            background-size: 200px 200px;\n            animation: grain 0.8s steps(6) infinite;\n          }\n\n          @keyframes grain {\n            0%, 100% {\n              transform: translate(0, 0);\n            }\n            10% {\n              transform: translate(-5%, -10%);\n            }\n            20% {\n              transform: translate(-15%, 5%);\n            }\n            30% {\n              transform: translate(7%, -25%);\n            }\n            40% {\n              transform: translate(-5%, 25%);\n            }\n            50% {\n              transform: translate(-15%, 10%);\n            }\n            60% {\n              transform: translate(15%, 0%);\n            }\n            70% {\n              transform: translate(0%, 15%);\n            }\n            80% {\n              transform: translate(3%, 35%);\n            }\n            90% {\n              transform: translate(-10%, 10%);\n            }\n          }\n        ",
              },
            }),
          ],
        });
      }
    },
    2166: function (e, t, n) {
      "use strict";
      n.d(t, {
        SiteStateProvider: function () {
          return a;
        },
        m: function () {
          return s;
        },
      });
      var r = n(7437),
        i = n(2265);
      let o = (0, i.createContext)(void 0);
      function a(e) {
        let { children: t } = e,
          [n, a] = (0, i.useState)("attention");
        return (0, r.jsx)(o.Provider, {
          value: {
            state: n,
            goToLetter: () => {
              a("letter");
            },
            goToLanding: () => {
              a("landing");
            },
          },
          children: t,
        });
      }
      function s() {
        let e = (0, i.useContext)(o);
        if (void 0 === e)
          throw Error("useSiteState must be used within a SiteStateProvider");
        return e;
      }
    },
  },
  function (e) {
    e.O(0, [971, 117, 744], function () {
      return e((e.s = 193));
    }),
      (_N_E = e.O());
  },
]);
