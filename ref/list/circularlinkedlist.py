class Node:
    def __init__(self, key, data):
        self.key = key
        self.data = data
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None
        self.current = None
    def is_empty(self):
        return self.head is None
    def length(self):
        length = 0
        # If list is empty
        if self.head is None:
            return 0
        self.current = self.head.next
        while self.current != self.head:
            length += 1
            self.current = self.current.next
        return length
    # insert link at the first location
    def insert_first(self, key, data):
        # create a link
        new_node = Node(key, data)
        if self.is_empty():
            self.head = new_node
            self.head.next = self.head
        else:
            # point it to old first node
            new_node.next = self.head
            # point first to new first node
            self.head = new_node
    # delete first item
    def delete_first(self):
        # save reference to first link
        if self.head.next == self.head:
            temp_link = self.head
            self.head = None
            return temp_link
        # mark next to first link as first
        temp_link = self.head
        self.head = self.head.next
        # return the deleted link
        return temp_link
    # Diplay the list
    def print_list(self):
        ptr = self.head
        print("[", end=" ")
        # start from the beginning
        if self.head is not None:
            while ptr.next != ptr:
                print("({}, {})".format(ptr.key, ptr.data), end=" ")
                ptr = ptr.next
        print("]")
# Main function
if __name__ == '__main__':
    linked_list = LinkedList()
    linked_list.insert_first(1, 10)
    linked_list.insert_first(2, 20)
    linked_list.insert_first(3, 30)
    linked_list.insert_first(4, 1)
    linked_list.insert_first(5, 40)
    linked_list.insert_first(6, 56)
    print("Original List: ", end="")
    linked_list.print_list()
    while not linked_list.is_empty():
        temp = linked_list.delete_first()
        print("\nDeleted value: ({}, {})".format(temp.key, temp.data))
    # print list
    print("List after deleting all items: ", end="")
    linked_list.print_list()