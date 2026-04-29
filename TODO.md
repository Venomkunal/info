# TODO: Auto-adjust iframe to image/screen size in WorksDemo

## Steps:
1. [x] Update WorksDemo.tsx: Add refs for mac/phone wrappers and screens, useLayoutEffect to measure image dimensions after load, compute dynamic scale for desktop (target 1440x900) and mobile (390x844), set --iframe-scale CSS var.
2. [x] Update WorksDemo.module.css: Replace fixed transform scales with `transform: scale(var(--iframe-scale))`, improve wrapper responsiveness with max-width/clamp/aspect-ratio.
3. [x] Add ResizeObserver in useEffect for window resize handling.
4. [x] Test on various screen sizes.
5. [x] Mark complete.

