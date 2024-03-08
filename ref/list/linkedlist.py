class LLNode:
   def __init__(self, data=None):
      self.data = data
      self.next = None
class LL:
   def __init__(self):
      self.head = None
   def listprint(self):
      printval = self.head
      while printval is not None:
         print(printval.data)
         printval = printval.next
   def AddAtBeginning(self,newdata):
      NewNode = LLNode(newdata)

      # Update the new nodes next val to existing node
      NewNode.next = self.head
      self.head = NewNode

   # Function to add node at a position
   def InsertAtPos(self,nodeatpos,newdata):
      if nodeatpos is None:
         print("The mentioned node is absent")
         return
      NewNode = LLNode(newdata)
      NewNode.next = nodeatpos.next
      nodeatpos.next = NewNode
      
   def reverse(self):
      prev = None
      curr = self.head
      while(curr is not None):
         next = curr.next
         curr.next = prev
         prev = curr
         curr = next
      self.head = prev
      
   def search(self, x):
      count = 0

      # Initialize current to head
      current = self.head

      # loop till current not equal to None
      while current != None:
         if current.data == x:
            print("Element is found")
            count = count + 1
         current = current.next
      if count == 0:
         print("Element is not found in the list")

# Function to merge the lists
# Takes two lists which are sorted
# joins them to get a single sorted list
def mergeLists(headA, headB):
    # A dummy node to store the result
    dummyNode = Node(0)
    # Tail stores the last node
    tail = dummyNode
    while True:
        # If any of the list gets completely empty
        # directly join all the elements of the other list
        if headA is None:
            tail.next = headB
            break
        if headB is None:
            tail.next = headA
            break
        # Compare the data of the lists and whichever is smaller is
        # appended to the last of the merged list and the head is changed
        if headA.data <= headB.data:
            tail.next = headA
            headA = headA.next
        else:
            tail.next = headB
            headB = headB.next
        # Advance the tail
        tail = tail.next
    # Returns the head of the merged list
    return dummyNode.next



l1 = LL()
l1.head = LLNode("23")
l2 = LLNode("12")
l3 = LLNode("7")
l4 = LLNode("14")
l5 = LLNode("61")

# Linking the first Node to second node
l1.head.next = l2

# Linking the second Node to third node
l2.next = l3
l3.next = l4
l4.next = l5
print("Original Linked List: ")
l1.listprint()

l1.AddAtBeginning("45")
l1.InsertAtPos(l1.head.next.next, "4")
print("Updated Linked List:")
l1.listprint()
l1.reverse()

print("Reversed Linked List:")
l1.listprint()
l1.search("7")