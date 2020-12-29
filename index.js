class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  set diameter(diameter) {
    this.radius = diameter / 2
  }
  
  get diameter() {
    return this.radius * 2
  }
  
  set circumference(circumference) {
    this.radius = circumference / (Math.PI * diameter)
  }
  
  get circumference() {
    return this.radius * Math.PI * diameter
  }
  
  set area(area) {
    this.area = area
  }
  
  get area() {
    return this.area * radius * 2
  }
  
}