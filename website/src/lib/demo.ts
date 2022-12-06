import Knobs from "@yaireo/knobs";

const knobConfig = {
  CSSVarTarget: document.querySelector(".sample__demo"),
  theme: {
    position: "bottom right", // default is 'top left'
  },
  visible: 2,
};

function initKnobs() {
  return new Knobs({
    ...knobConfig,
    knobs: [
      // {
      //   cssVar: ["bg"], // alias for the CSS variable
      //   label: "Color",
      //   type: "color",
      //   value: "#45FDA9",
      // },
    ],
  });
}

function initNav() {
  const demoLinks = document.querySelector(".page__nav__items");
  const targetEl = document.querySelector(".sample__demo") as HTMLElement;

  function onClick(event: Event) {
    const item = (event.target as Element)?.closest("li");
    if (item) {
      targetEl.dataset.demo = item.dataset.demo;
    }
  }

  demoLinks?.addEventListener("click", onClick);
}

export function init() {
  initNav();
  initKnobs();
}

init();
