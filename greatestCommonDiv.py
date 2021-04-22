class car:
    def attr(self,color,speed):
        self.color = color
        self.speed = speed

    def set_color(self):
        return self.color
       


bmw = car()
bmw.attr('blue',115)
print(bmw.set_color())




