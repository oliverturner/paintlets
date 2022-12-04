export function init() {
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

init();
