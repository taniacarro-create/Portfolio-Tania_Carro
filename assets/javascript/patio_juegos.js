gsap.registerPlugin(Draggable, InertiaPlugin);

Draggable.create(".drag", {
    inertia: true,
    bounds: document.getElementById('container'),
});