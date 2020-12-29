class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  set diameter(diameter) {
    this.diameter = diameter
  }
  
  get diameter() {
    return this.diameter * 2
  }
  
  set circumference(circumference) {
    this.circumference = circumference
  }
  
  get circumference() {
    return this.circumference * Math.PI * diameter
  }
  
  set area(area) {
    this.area = area
  }
  
  get area() {
    return this.area * radius * 2
  }
  
  
}