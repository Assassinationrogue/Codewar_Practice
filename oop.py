# import math 
# class point:  # we can create an instance or object. Class is used to protect data from getting leaked/ modified.
#     def move(self,x,y):
#         self.x = x
#         self.y = y
#     def calculate_distance(self,final_point):
#         return (math.sqrt(self.x - final_point.x)**2 + (self.y - final_point.y)**2)

#     def reset(self):
#         self.x = 0
#         self.y=0  # method and it is like a function, but method has a self argument too. Self allow us to access the instance of the class or the attributes of the class


# p2 =  point()   

# p1 = point()

# # adding attribute to our class, x and y are attributes

# p1.x = 6
# p1.y = 4

# p2.x = 3

# p2.y = 5

# print(p1.x, p1.y)

# p1.reset() # calling out reset method


# print(p1.x, p1.y)

# p1.move(8,1)
# print(p2)

# print(p1.calculate_distance(p2))

# python initialization method

class point:
    def __init__(self,x,y):
        self.move(x,y)
    
    def move(self,x,y):
        self.x = x
        self.y = y


p1 = point()

