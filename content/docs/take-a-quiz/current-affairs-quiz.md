---
title: "Demo"
date: 2019-11-19T17:21:20+01:00
page: true
---

# Hugo Quiz

{{< rawhtml >}}
    <script prefetch
        src="https://cdn.jsdelivr.net/npm/quizdown@latest/public/build/quizdown.js">
    </script>
{{< /rawhtml >}}

{{< quizdown >}}

---
primary_color: steelblue
---

# The sound of dog

---
shuffle_answers: false
---

What do dogs sound like?

> ![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG/150px-Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG)

```python
class Dog(Animal):
    def __init__(self, name):
        self.name = name
```

- [ ] yes
- [ ] no
- [ ] `self.sound = "meow"`
- [x] wuff

# Put the [days](https://en.wikipedia.org/wiki/Day) in order!

> Monday is the *first* day of the week.

1. Monday
2. Tuesday
3. Wednesday
4. Friday
5. Saturday  


# Optional Math formula rendering

$$
x = \frac{2+2}{\sqrt{a^2+b^2}}
$$


- [ ] yes
- [ ] no

{{< /quizdown >}}