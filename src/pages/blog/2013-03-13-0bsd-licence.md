---
layout: ../../layouts/blog.astro
published: true
title: 0BSD Licence
description: The BSD Zero Clause License, explained.
author: Rob Landley
date: 2013-03-13T00:00:00.000Z
featuredpost: false
image: ../images/unsplash/tim-mossholder-ZYBl6VnUd_0-unsplash.jpg
tags:
  - 0BSD
  - licence
---

Photo by [Tim Mossholder](https://unsplash.com/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/open-source?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
## Introduction

The 0BSD (Zero-Clause BSD) licence was originated by Rob Landley in [Toybox](http://www.landley.net/toybox). It's also known as "Free Public License 1.0.0" and is similar to the [MIT No Attribution License](https://github.com/aws/mit-0).

It is an extremely permissive licence, as it does not require the user to include the copyright notice, license text, or disclaimer in either source or binary forms.

## Origin

Rob Landley posted [this](http://lists.landley.net/pipermail/toybox-landley.net/2013-March/004589.html) in the Toybox mailing list on 13 March 2013 to introduce the 0BSD licence which was subsequently adopted by the Toybox project.

>Nobody but me is likely to care, but I'd like to simplify the first paragraph from the current:
>
>>Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
>
>To just say:
>
>>Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.
>
>Reasoning: it was never my intent to require anybody to copy license text into another project if they cut and pasted something out of toybox. The "permission for any purpose" is as close to public domain as you can get in our current screwed up legal system without making people uncomfortable the _other_ way. (Besides, my initial reading of that was "all copies of the source code" but that's not what it says, and somebody pointed out that Android has "show license text" options because paranoid lawyers think that sort of thing applies to the BINARY version, which is nuts.)
>
>I'm not changing it this release, but in case anybody was going to object I thought I'd post it here for a bit first so I can remove your code if it really matters to you. This version is still outgoing-compatible with the old version (code that says the new thing can give code to a project that says the old thing, whether it could receive it depends on how paranoid your lawyers are).
>
>Rob

## 0BSD Template

```text
Copyright (C) [year] by [copyright holder] <[email]>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```
