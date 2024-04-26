[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)

# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### Analysis

```mergesort()``` outer loop: the outer loop runs $log_2 n$ times because the size variable is multiplied by 2 every iteration until it is greater than the length of the array. This gives the inner loop $\theta(logn)$

```mergesort()``` inner loop: the inner loop runs $\frac{n}{size}$ times which reduces to $\theta(n)$ once we drop the constants.

currently the complezity is at $nlogn$

```merge()``` while loop: the while loop iterates through every element of the array making it $\theta(n)$

This brings our overall complexity to $n^2logn$


### Sources
https://www.geeksforgeeks.org/iterative-merge-sort/

https://www.geeksforgeeks.org/in-place-merge-sort/

I used both of these to help me with different parts of the program





