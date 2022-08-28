---
layout: ../../layouts/withmermaid.astro
title: Mermaid Diagrams
description: Generate mermaid diagrams in blog posts.
author: Chris Tham
publishDate: 2022-08-20T00:00:00.000Z
coverSVG: ../svg/undraw/undraw_scrum_board.svg
socialImage: /images/undraw/undraw_scrum_board.png
categories:
  - information
tags:
  - mermaid
  - diagram
  - flowchart
  - sequence
  - class
  - ER
---

## Simple Example

<div class="mermaid">
graph LR
    Start --> Stop
</div>

## flowchart

<div class="mermaid">
flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
</div>

## Sequence Diagram

<div class="mermaid">
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
</div>

## Class Diagram

<div class="mermaid">
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</div>

## Entity Relationship Diagram

<div class="mermaid">
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
</div>