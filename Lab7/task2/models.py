class Vehicle:
    def __init__(self, brand, model, color):
        self.brand = brand
        self.model = model
        self.color = color

    def move(self):
        return "Move!"

    def change_color(self, c):
        self.color = c

    def __str__(self):
        return f"{self.brand}, {self.model}, {self.color}"

class Car(Vehicle):
    def __init__(self, brand, model, color, driver):
        super().__init__(brand, model, color)
        self.driver = driver

    def move(self):
        return "Drive!"

class Boat(Vehicle):
    def __init__(self, brand, model, color, captain):
        super().__init__(brand, model, color)
        self.captain = captain

    def move(self):
        return "Sail!"

class Plane(Vehicle):
    def __init__(self, brand, model, color, pilot):
        super().__init__(brand, model, color)
        self.pilot = pilot

    def move(self):
        return "Fly!"
