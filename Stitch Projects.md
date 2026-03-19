# Design System Strategy: The Liquid Glass Directive

## 1. Overview & Creative North Star: "Luminous Depth"
The Creative North Star for this design system is **Luminous Depth**. We are moving away from the static, "boxy" web and toward a digital environment that feels like a precision-engineered physical object. This is an editorial approach to glassmorphism: it is high-contrast, ultra-polished, and intentionally spacious.

By leveraging heavy backdrop blurs, organic roundedness, and a "no-line" philosophy, we create an interface that feels less like a website and more like a high-end heads-up display (HUD). We challenge the rigid grid by using **intentional asymmetry**—overlapping glass panels and floating elements that break the container edge to suggest a world that exists beyond the viewport.

---

## 2. Colors & Surface Philosophy
Our palette is rooted in the deep `background` (#0e0e10), providing a high-contrast stage for our "Liquid Glass" components.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for structural sectioning. To define boundaries, designers must use:
*   **Tonal Shifting:** Transitioning from `surface` to `surface-container-low`.
*   **Refractive Depth:** Using `backdrop-blur` (xl or 2xl) to allow the underlying background gradients to bleed through.
*   **Negative Space:** Utilizing the Spacing Scale (specifically `8` to `12`) to create mental boundaries through distance.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical glass layers. Use the `surface-container` tiers to indicate proximity to the user:
*   **Background (#0e0e10):** The furthest plane.
*   **Surface Container Low (#131315):** The base "tray" for page content.
*   **Surface Bright (#2c2c2f) at 10-20% Opacity:** The standard floating glass panel.
*   **Surface Container Highest (#252528):** Active states or "top-shelf" priority elements.

### The Glass & Gradient Rule
To instill "visual soul," use fluid gradients for primary actions and hero moments. 
*   **Signature Gradient:** A linear flow from `primary` (#7fafff) to `tertiary` (#68d3ff) at a 135-degree angle.
*   **The Glow:** Apply a 1px "Ghost Border" using `outline-variant` at 15% opacity to the top and left edges of glass cards to simulate light hitting the edge of a glass pane.

---

## 3. Typography: Editorial Clarity
We pair the technical precision of **Space Grotesk** with the humanist legibility of **Inter**.

*   **Display & Headlines (Space Grotesk):** Use `display-lg` (3.5rem) and `headline-lg` (2rem) to anchor the page. Because glass surfaces can reduce contrast, headlines should always use `on-surface` (#fefbfe) with a slight `text-shadow` (0 2px 4px rgba(0,0,0,0.5)) when placed over complex backgrounds.
*   **Body & UI (Inter):** Use `body-lg` (1rem) for readability. Inter’s neutral tone balances the expressive nature of the headlines.
*   **The Label Rule:** All labels (`label-md`) should be set in `on-surface-variant` with a letter-spacing of 0.05rem to maintain a technical, "engineered" feel.

---

## 4. Elevation & Depth: The Layering Principle
Depth is achieved through **Tonal Layering** rather than structural shadows.

*   **The Stacking Order:** A card (using `surface-container-highest`) placed on a section (using `surface-container-low`) creates a natural, soft lift.
*   **Ambient Shadows:** For floating modals, use a "Cloud Shadow": 
    *   *Blur:* 40px - 80px.
    *   *Color:* `surface-container-lowest` at 40% opacity. 
    *   This mimics the occlusion of light rather than a harsh drop shadow.
*   **Glassmorphism Specs:**
    *   **Background:** `white` or `primary` at 5-10% opacity.
    *   **Blur:** `backdrop-blur-xl` (24px) or `backdrop-blur-2xl` (40px).
    *   **Edge:** A 1px `outline-variant` at 20% opacity.

---

## 5. Components

### Buttons
*   **Primary:** Fully rounded pills (`rounded-full`). Background is the `primary` to `tertiary` gradient. Text is `on-primary` (#002e60).
*   **Secondary (Glass):** Semi-transparent `white/10` with `backdrop-blur-md`. 1px Ghost Border. 
*   **Hover State:** Increase backdrop-blur density and add a soft `primary` outer glow (4px spread).

### Cards & Containers
*   **Radius:** Minimum `2rem` (xl) for all main containers.
*   **Separation:** Strictly forbid divider lines. Separate content using `spacing-6` (2rem) or by nesting a `surface-container-high` inner card inside a `surface-container-low` parent.

### Input Fields
*   **Aesthetic:** "Sunken" glass. Use `surface-container-lowest` with a subtle inner shadow. 
*   **Active State:** The border glows with a `primary` tint at 30% opacity. No solid 1px lines.

### Floating Navigation (The Dock)
*   **Styling:** A `rounded-full` pill floating at the bottom of the viewport. 
*   **Material:** `surface-container-high` at 40% opacity with `backdrop-blur-2xl`. 
*   **Interaction:** Icons scale up slightly (1.1x) on hover, simulating a "magnification" effect through glass.

---

## 6. Do’s and Don'ts

### Do:
*   **Do** use asymmetrical layouts where one glass panel overlaps another.
*   **Do** use the `2rem` (xl) and `3rem` (2xl) corner radii to maintain the "liquid" feel.
*   **Do** ensure text on glass panels meets WCAG AA contrast by subtly darkening the glass behind the text if necessary.

### Don't:
*   **Don't** use 100% opaque, solid borders. They break the "Liquid Glass" illusion.
*   **Don't** use sharp corners (0px-8px) unless it's for a tiny functional utility (e.g., a checkbox).
*   **Don't** use "pure black" shadows. Shadows should be a deeper, translucent version of the background (`surface-container-lowest`).
*   **Don't** clutter the UI. Glassmorphism requires "breathing room" (negative space) to feel premium. If it feels crowded, the glass effect becomes "muddy."