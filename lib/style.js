var SVG = require("./draw.js")
var Filter = require("./filter.js")

var Style = (module.exports = {
  cssContent: `
    .sb-label {
      font-weight: 500;
      fill: #fff;
      font-size: 12px;
    }

    .sb-obsolete { fill: #d42828; stroke:#CC9900; }
    .sb-motion { fill: #4C97FF; stroke:#3373CC; }
    .sb-looks { fill: #9966FF; stroke:#774DCB; }
    .sb-sound { fill: #FFAB19; stroke:#BD42BD; }
    .sb-pen { fill: #FF6680; stroke:#FF3355;  }
    .sb-events { fill: #FFBF00; stroke:#CF8B17; }
    .sb-control { fill: #FFAB19; stroke:#CF8B17; }
    .sb-sensing { fill: #5CB1D6; stroke:#2E8EB8; }
    .sb-operators { fill: #59C059; stroke:#389438; }
    .sb-variables { fill: #FF8C1A; stroke:#DB6E00; }
    .sb-list { fill: #FF661A; stroke:#E64D00; }
    .sb-custom { fill: #FF6680; stroke:#FF3355; }
    .sb-custom-arg { fill: #FF4D6A; stroke:#FF3355; }
    .sb-extension { fill: #FF6680; stroke:#FF3355; }
    .sb-grey { fill: #969696; stroke:#CC9900; }

    .sb-input-dropdown .sb-obsolete { fill: #d42828; stroke:#CC9900; }
    .sb-input-dropdown .sb-motion { fill: #4C97FF; stroke:#3373CC; }
    .sb-input-dropdown .sb-looks { fill: #9966FF; stroke:#774DCB; }
    .sb-input-dropdown .sb-sound { fill: #FFAB19; stroke:#BD42BD; }
    .sb-input-dropdown .sb-pen { fill: #FF6680; stroke:#FF3355;  }
    .sb-input-dropdown .sb-events { fill: #FFBF00; stroke:#CF8B17; }
    .sb-input-dropdown .sb-control { fill: #FFAB19; stroke:#CF8B17; }
    .sb-input-dropdown .sb-sensing { fill: #5CB1D6; stroke:#2E8EB8; }
    .sb-input-dropdown .sb-operators { fill: #59C059; stroke:#389438; }
    .sb-input-dropdown .sb-variables { fill: #FF8C1A; stroke:#DB6E00; }
    .sb-input-dropdown .sb-list { fill: #FF661A; stroke:#E64D00; }
    .sb-input-dropdown .sb-custom { fill: #FF6680; stroke:#FF3355; }
    .sb-input-dropdown .sb-custom-arg { fill: #FF4D6A; stroke:#FF3355; }
    .sb-input-dropdown .sb-extension { fill: #FF6680; stroke:#FF3355; }
    .sb-input-dropdown .sb-grey { fill: #969696; stroke:#CC9900; }

    .sb-bevel {
      filter: url(#bevelFilter);
    }

    .sb-input {
      filter: url(#inputBevelFilter);
    }
    .sb-input-number,
    .sb-input-string,
    .sb-input-number-dropdown {
      fill: #fff;
    }
    .sb-literal-number,
    .sb-literal-string,
    .sb-literal-number-dropdown,
    .sb-literal-dropdown {
      font-weight: normal;
      font-size: 12px;
      word-spacing: 0;
    }
    .sb-literal-number,
    .sb-literal-string,
    .sb-literal-number-dropdown {
      fill: #000;
    }

    .sb-darker {
    }
    .sb-desaturate {
      filter: url(#desaturateFilter);
    }

    .sb-outline {
      stroke: #fff;
      stroke-opacity: 0.2;
      stroke-width: 2;
      fill: none;
    }

    .sb-define-hat-cap {
      stroke: #632d99;
      stroke-width: 1;
      fill: #8e2ec2;
    }

    .sb-comment {
      fill: #ffffa5;
      stroke: #d0d1d2;
      stroke-width: 1;
    }
    .sb-comment-line {
      fill: #ffff80;
    }
    .sb-comment-label {
      font-family: Helevetica, Arial, DejaVu Sans, sans-serif;
      font-weight: bold;
      fill: #5c5d5f;
      word-spacing: 0;
      font-size: 12px;
    }

    .sb-diff {
      fill: none;
      stroke: #000;
    }
    .sb-diff-ins {
      stroke-width: 2px;
    }
    .sb-diff-del {
      stroke-width: 3px;
    }
  `.replace(/[ \n]+/, " "),

  makeIcons() {
    return [
      SVG.el("path", {
        d:
          "M1.504 21L0 19.493 4.567 0h1.948l-.5 2.418s1.002-.502 3.006 0c2.006.503 3.008 2.01 6.517 2.01 3.508 0 4.463-.545 4.463-.545l-.823 9.892s-2.137 1.005-5.144.696c-3.007-.307-3.007-2.007-6.014-2.51-3.008-.502-4.512.503-4.512.503L1.504 21z",
        fill: "#3f8d15",
        id: "greenFlag",
      }),
      SVG.el("path", {
        d:
          "M6.724 0C3.01 0 0 2.91 0 6.5c0 2.316 1.253 4.35 3.14 5.5H5.17v-1.256C3.364 10.126 2.07 8.46 2.07 6.5 2.07 4.015 4.152 2 6.723 2c1.14 0 2.184.396 2.993 1.053L8.31 4.13c-.45.344-.398.826.11 1.08L15 8.5 13.858.992c-.083-.547-.514-.714-.963-.37l-1.532 1.172A6.825 6.825 0 0 0 6.723 0z",
        fill: "#fff",
        id: "turnRight",
      }),
      SVG.el("path", {
        d:
          "M3.637 1.794A6.825 6.825 0 0 1 8.277 0C11.99 0 15 2.91 15 6.5c0 2.316-1.253 4.35-3.14 5.5H9.83v-1.256c1.808-.618 3.103-2.285 3.103-4.244 0-2.485-2.083-4.5-4.654-4.5-1.14 0-2.184.396-2.993 1.053L6.69 4.13c.45.344.398.826-.11 1.08L0 8.5 1.142.992c.083-.547.514-.714.963-.37l1.532 1.172z",
        fill: "#fff",
        id: "turnLeft",
      }),
      SVG.el("path", {
        d: "M0 0L4 4L0 8Z",
        fill: "#111",
        id: "addInput",
      }),
      SVG.el("path", {
        d: "M4 0L4 8L0 4Z",
        fill: "#111",
        id: "delInput",
      }),
      SVG.setProps(
        SVG.group([
          SVG.el("path", {
            d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",
            fill: "#000",
            opacity: "0.3",
          }),
          SVG.move(
            -1,
            -1,
            SVG.el("path", {
              d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",
              fill: "#fff",
              opacity: "0.9",
            })
          ),
        ]),
        {
          id: "loopArrow",
        }
      ),
    ]
  },

  makeStyle() {
    var style = SVG.el("style")
    style.appendChild(SVG.cdata(Style.cssContent))
    return style
  },

  bevelFilter(id, inset) {
    var f = new Filter(id)

    var alpha = "SourceAlpha"
    var s = inset ? -1 : 1
    s = 0
    var blur = f.blur(0, alpha)

    f.merge([
      "SourceGraphic",
      f.comp(
        "in",
        f.flood("#fff", 0),
        f.subtract(alpha, f.offset(+s, +s, blur))
      ),
      f.comp(
        "in",
        f.flood("#000", 0),
        f.subtract(alpha, f.offset(-s, -s, blur))
      ),
    ])

    return f.el
  },

  darkFilter(id) {
    var f = new Filter(id)

    f.merge([
      "SourceGraphic",
      f.comp("in", f.flood("#000", 0.2), "SourceAlpha"),
    ])

    return f.el
  },

  desaturateFilter(id) {
    var f = new Filter(id)

    var q = 0.333
    var s = 0.333
    f.colorMatrix("SourceGraphic", [
      q,
      s,
      s,
      0,
      0,
      s,
      q,
      s,
      0,
      0,
      s,
      s,
      q,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
    ])

    return f.el
  },

  darkRect(w, h, category, el) {
    return SVG.setProps(
      SVG.group([
        SVG.setProps(el, {
          class: ["sb-" + category, "sb-darker"].join(" "),
        }),
      ]),
      { width: w, height: h }
    )
  },

  defaultFontFamily: "\"Helvetica Neue\", Helvetica, sans-serif",
})
