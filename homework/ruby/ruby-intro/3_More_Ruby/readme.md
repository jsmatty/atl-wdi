[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HW Reading: Practical Object-Oriented Design in Ruby

[POODR](http://www.poodr.com/) (pronounced "pooder") explains object-oriented design (OOD) in Ruby. Javascript is an object-oriented language but it is not class-based like it is in Ruby, Java, C++, C, etc.. POODR was written by Sandi Metz, a software developer and author focused on writing flexible object-oriented code in Ruby and Rails.

## Exercise Objectives

- have fun reading material on programmatic thinking and design
- gain insight to programming languages from a design standpoint
- gain an intermediate level of understanding Ruby as a class-based language
- start thinking about the differences in Javascript and Ruby

## Directions

Read the first 3 chapters of POODR [available as a PDF here](https://github.com/edenzik/cs105b/blob/master/books/Practical%20Object-Oriented%20Design%20in%20Ruby.pdf) and answer the questions below.


### Short Answer Questions:

Answer should be no more than a couple of sentences. Refer to the reading.

1. According to Metz, what is Object-oriented design about?

```
Its about Managing dependencies
and not following a fixed set of rules
Uses tools, principles and patterns.

```

2. What does SOLID stand for?

```
-Single-responsiblity principle: a class should only have one job
-Open-closed principle: open for extention, closed for modification.
-Liskov substitution principle: every subclass should be substitutable for their parent class.
-Interface segregation principle: A client should never be forced to have UI that it doesnt use
and clients shouldnt be forced to depend on methods they dont use.
-Dependency Inversion Principle: high level module must not depend on the low level module, but they should depend on abstractions.

```

3. Ruby is a class-based object-oriented language. What does that mean?

```
Ruby combines data and behavior in a single object where as other languages 
divide them into two seperate never-meeting objects
```

4. Where are methods defined in Ruby?

```
Classes
```

5. Why does single Responsibility matter?

```
Multi use classes are hard to read and reuse. Higher chance of breaking your code and causing you to lose time you could spend on other parts
```

6. What does `attr_reader` do?

```
attr_accessor is a simple method that helps us in cleaning(DRY-ing) up the repeating getter and setter methods.
```

7. What are 4 benefits Metz outlines for methods that have a single responsibility?

```
Your Answer Here
```

8. What are 4 things an object knows when it has a dependency?

```
 
1- Reuseablity
2- Comments are avoided
3- expose previously hidden qualities
4- Mobility of classes
```

9. Dependency management is core to creating future-proof applications. What does injecting dependencies and isolating dependencies do? What are their benefits?

```
1-the name of another class
2- the name of a message that it intends to send to someone other than self
3- the arguements that a message requires
4- the order of those arguemnts 
```
