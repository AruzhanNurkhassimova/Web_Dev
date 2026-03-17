# Vehicle OOP Project (Python)

##  Description

This project demonstrates the use of Object-Oriented Programming (OOP) concepts in Python.

##  Concepts Used

* Classes and Objects
* Inheritance
* Method Overriding
* Polymorphism
* Encapsulation
* Modules and Imports

##  Classes Overview

###  Vehicle (Base Class)

Attributes:

* brand
* model
* color

Methods:

* move()
* info()
* **str**()

###  Car

* Inherits from Vehicle
* Additional attribute: driver
* Overrides move() → "Drive!"

###  Boat

* Inherits from Vehicle
* Additional attribute: captain
* Overrides move() → "Sail!"

###  Plane

* Inherits from Vehicle
* Additional attribute: pilot
* Overrides move() → "Fly!"

##  How to Run

1. Make sure both files are in one folder:

models.py
main.py

2. Run the program:

python main.py

##  Example Output

Ford, Mustang, Red
Ford Mustang is Red
Action: Drive!

Ibiza, Touring 20, Blue
Ibiza Touring 20 is Blue
Action: Sail!

Boeing, 747, White
Boeing 747 is White
Action: Fly!
