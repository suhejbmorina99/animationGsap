let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 3, { y: -300 })
  .to(".girl", 3, { y: -200 }, "-=3")
  .fromTo(".bg1", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
  .fromTo(
    ".content-images",
    { opacity: 0, x: -200 },
    { opacity: 1, x: 0, duration: 3, stagger: 0.3 }
  );

timeline.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 2 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "150%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
