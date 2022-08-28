---
draft: true
layout: ../../layouts/withmermaid.astro
title: Mermaid Diagrams (Part 2)
description: Non working mermaid diagrams.
author: Chris Tham
publishDate: 2022-08-22T00:00:00.000Z
coverSVG: ../svg/undraw/undraw_scrum_board.svg
socialImage: /images/undraw/undraw_scrum_board.png
categories:
  - information
tags:
  - mermaid
  - diagram
---


## State Diagram

<div class="mermaid">
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
</div>

## Gantt Chart

<div class="mermaid">
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
</div>