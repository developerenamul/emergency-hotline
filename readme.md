## WELCOME TO ( Emergency Hotline Service )

---

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById :** It is so faster to fetch an element because browser gets data using id directly. It returns only one element.It can get only those element which has element id.
- **querySelector :** It returns only the fist match data . We can pass tag,class attribute , id etc.
- **getElementsByClassName :** It returns multiple elements with the same class name. The return type is html collection and it is live . It is like an array but we can not apply forEach method in it.
- **querySelectorAll :** It also returns multiple element but not like html collection but node list. It is static .

---

### 2. How do you create and insert a new element into the DOM?

It is very easy to insert a new element into the DOM.
-step1: first create an element
-step2: put some content into it
-step3: append the element to its parent, where it will be displayed into the DOM

---

### 3. What is Event Bubbling and how does it work?

When an event happens js engine starting find it from top to bottom . When the target gotten it executed and went back to its parent to top parent and in this journey of way back if any other event set to its parent then it also executed.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

It is very useful because instead of setting different events on child element it set only one event on parent element and pick the target element using bubble with event.target. It is very light to use as it is not needed to loop.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is a way to stop reloading. When we submit a form, page is automatically reloaded , to Stop this situation we use this method.

stopPropagation() is a method to stop bubbling events.
