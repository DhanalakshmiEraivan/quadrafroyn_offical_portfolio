# V15 interactive refinements

New interactions: reading progress, three selectable hero frames, hero playback pause/resume, city photo credit, capability pagination, capability next/previous controls, active capability tracking, craft carousel navigation, craft index, diary active-frame tracking, diary progress dots, diary arrows, scroll-to-top, keyboard-shortcut overlay, Escape-to-close, link-copy confirmation, hover depth, focus-visible outlines, mobile-specific masking and reduced-motion rules.

Visual animations: progress interpolation, hero crossfade, image zoom, card lift, card depth, glow transition, gallery snapping, pagination morph, arrow hover, button scaling, floating-tools lift, shortcuts entry, scroll reveals, photo fade, service carousel scroll, background parallax styling, diary hover, and responsive image resizing.

Note: Card occlusion in the Craft section is implemented via left-to-right viewport masking with the Q in a higher stacking layer. It requires visual QA at your target desktop viewport; this is not an SVG glyph-accurate knockout mask.

Run `npm ci && npm run dev` or `npm run build`. Internet access is required for externally hosted images.
