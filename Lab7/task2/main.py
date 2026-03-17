from models import Vehicle, Car, Boat, Plane

car1 = Car("Ford", "Mustang", "Red", "John") 
boat1 = Boat("Ibiza", "Touring 20", "Blue", "Smit") 
plane1 = Plane("Boeing", "747", "White", "Carl") 

vehicles = [car1, boat1, plane1]

for x in vehicles:
  print(x, "     Action:", x.move())
  x.change_color("Black")
  print(x, "     Action:", x.move())
