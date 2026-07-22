import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",

  containerHeight = "300px",
  containerWidth = "100%",

  imageHeight = "300px",
  imageWidth = "300px",

  scaleOnHover = 1.06,
  rotateAmplitude = 10,

  showMobileWarning = false,
  showTooltip = false,

  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useMotionValue(0),
    springValues
  );

  const rotateY = useSpring(
    useMotionValue(0),
    springValues
  );

  const scale = useSpring(
    1,
    springValues
  );

  const opacity = useSpring(0);

  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const offsetX =
      e.clientX - rect.left - rect.width / 2;

    const offsetY =
      e.clientY - rect.top - rect.height / 2;

    const rotationX =
      (offsetY / (rect.height / 2)) *
      -rotateAmplitude;

    const rotationY =
      (offsetX / (rect.width / 2)) *
      rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;

    rotateFigcaption.set(
      -velocityY * 0.6
    );

    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);

    if (showTooltip) {
      opacity.set(1);
    }
  }

  function handleMouseLeave() {
    scale.set(1);

    rotateX.set(0);
    rotateY.set(0);

    rotateFigcaption.set(0);

    opacity.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative flex h-full w-full items-center justify-center [perspective:800px]"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* Mobile Warning */}
      {showMobileWarning && (
        <div className="absolute top-4 z-10 block text-center text-sm text-white sm:hidden">
          This effect is optimized for desktop.
        </div>
      )}

      {/* 3D Card */}
      <motion.div
        className="relative overflow-hidden rounded-[15px] [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >

        {/* Image */}
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 h-full w-full rounded-[15px] object-cover"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {/* Dark Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[15px] bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Custom Overlay Content */}
        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute inset-0 z-[2] rounded-[15px] will-change-transform [transform:translateZ(30px)]"
          >
            {overlayContent}
          </motion.div>
        )}

      </motion.div>

      {/* Tooltip */}
      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 z-[3] hidden rounded-md bg-white px-3 py-1 text-xs text-black sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}

    </figure>
  );
}