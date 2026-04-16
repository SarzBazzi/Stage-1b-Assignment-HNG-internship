# Stage-1b-Assignment-HNG-internship
Stage 1b assignment of HNG internship

# Testable Profile Card - Stage 1B

A highly accessible, responsive, and test-driven profile card component built with semantic HTML, modern CSS, and Vanilla JavaScript. This project was developed to meet the strict requirements of the Stage 1B Frontend Wizard task, focusing on testability and WCAG AA compliance.

##  Features

* **Semantic HTML:** Fully structured using appropriate tags (`<article>`, `<figure>`, `<nav>`, `<section>`, `<header>`) for optimal screen reader interpretation.
* **Test-Ready Architecture:** Every required visible element includes the specific `data-testid` attribute to ensure 100% stable automated grading and end-to-end testing.
* **Dynamic Time:** Displays the exact current epoch time in milliseconds, updating every second. Implements `aria-live="polite"` so screen readers can announce changes smoothly.
* **Accessibility First (WCAG AA):**
  * Meaningful `alt` text for images.
  * Explicit `:focus-visible` states for keyboard navigation.
  * Formatted with ARIA labels where necessary.
* **Responsive Layout:** Mobile-first design that seamlessly scales from a stacked vertical layout on small screens to a side-by-side view on desktop environments.
* **Bonus: Accessibility Explorer:** An interactive side-panel allowing users to dynamically tweak the card's color theme while calculating live WCAG contrast ratios to verify AA/AAA pass/fail status in real-time.

##  Technologies Used

* **HTML5:** Semantic markup and structure.
* **CSS3:** Custom properties (variables), Flexbox, responsive media queries, and accessible focus states.
* **Vanilla JavaScript (ES6+):** Real-time epoch clock logic and dynamic color contrast calculation.

##  Testing Selectors Included

This project is fully prepared for automated testing using the following exact `data-testid` selectors:

* `test-profile-card` (Root container)
* `test-user-name`
* `test-user-bio`
* `test-user-time`
* `test-user-avatar`
* `test-user-social-links`
* `test-user-social-github` / `twitter` / `linkedin`
* `test-user-hobbies`
* `test-user-dislikes`
