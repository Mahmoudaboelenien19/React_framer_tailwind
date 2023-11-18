export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number,
  opacity?: number
) => ({
  hidden: {
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    opacity: 0,

    x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
  },
  show: {
    y: 0,
    x: 0,

    opacity: [0, 0.5, opacity || 1],
    transition: {
      type: "tween",
      duration: 1.2,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
