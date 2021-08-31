# Linear Search

'''
Linear Search is a vary basic searching algorithm for searching an element in Python
In this algorithm we traverse each element one by one until we find our desired element
Worst-case time Complexity : O(n)

sample execution:

Enter elements of array separated by commas: 
1,2,3,4,5
Enter the key to be searched:
5
Key found at 4

'''

#taking input array from user
print("Enter elements of array separated by commas: ")
Array = input().split(',')

#Taking the key from user
print('Enter the key to be searched:')
key = input()

for i in range(len(Array)):
	if Array[i] == key:
		print("Key found at "+str(i))
		exit()
print("Key not found")

