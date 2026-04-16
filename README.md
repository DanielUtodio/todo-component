# Todo Card – Stage 1

## Overview

This project is a single Todo Card component built with HTML, CSS, and JavaScript. It extends the Stage 0 version by adding interactivity, state management, and improved accessibility.

The component simulates a real-world task card with editing, status updates, priority handling, and dynamic time tracking.

## Features

### Editable Content

* Edit title, description, priority, and due date
* Save updates the card
* Cancel restores previous state

### Status Management

* Status options: Pending, In Progress, Done
* Checkbox and status dropdown are synchronized
* Marking as Done:

  * Applies strike-through to title
  * Stops time updates
  * Replaces due date with "Completed"

### Priority Indicator

* Priority levels: Low, Medium, High
* Visual feedback using background color changes

### Expand / Collapse

* Description is collapsible
* Accessible toggle using aria-expanded and aria-controls

### Time Management

* Displays:

  * Due in days, hours, or minutes
  * Overdue states
* Updates every 60 seconds
* Shows "Completed" when task is done

### Accessibility

* All inputs have associated labels
* aria-live used for time updates
* Expand/collapse is keyboard accessible
* Logical tab flow maintained

### Responsiveness

* Works across mobile, tablet, and desktop
* Layout adapts without breaking on long content

## Technologies Used

* HTML
* CSS
* JavaScript (Vanilla)

## Live Demo

Deployed on Vercel:
https://todo-component.vercel.app/

## Repository

GitHub repository:
https://github.com/DanielUtodio/todo-component

## Notes

This project focuses on building a single, well-structured component rather than a full application. Emphasis was placed on clean state management, accessibility, and meeting all specified behavioral requirements.
