---
title: PlantUML Diagrams
description: Generate PlantUML diagrams in blog posts.
author: chris-tham
publishDate: 2022-08-25T00:00:00.000Z
coverSVG: ../../assets/svg/undraw/undraw_process.svg
socialImage: ../../assets/undraw/undraw_process.png
categories:
  - information
tags:
  - plantuml
  - diagram
---

## Simple PlantUML Diagram

```plantuml Simple Example
class SimplePlantUMLPlugin {
    + transform(syntaxTree: AST): AST
}
```

## Sequence Diagram

```plantuml Declaring participant
@startuml
participant Participant as Foo
actor       Actor       as Foo1
boundary    Boundary    as Foo2
control     Control     as Foo3
entity      Entity      as Foo4
database    Database    as Foo5
collections Collections as Foo6
queue       Queue       as Foo7
Foo -> Foo1 : To actor
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
Foo -> Foo6 : To collections
Foo -> Foo7: To queue
@enduml
```
