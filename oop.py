class Node:
    def __init__(self,data=None,next=None):
        self.data = data
        self.next = next
    
class LinkedList:
    def __init__(self):
        self.head = None

    def add_at_begin(self,data):
        node = Node(data,self.head)
        self.data = node

    def print_ll(self):
        if self.head is None:
            print('Linked list is empty!')

        itr = self.head
        LL_itr = ''
        while itr:
            LL_itr += itr.data + "-->"
            itr = itr.next
        
        print(LL_itr)



