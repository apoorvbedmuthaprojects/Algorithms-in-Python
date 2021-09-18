# Insertion Sort

'''
Insertion sort is a basic sorting algorithm that sorts a given array by putting each element of array in a different array in a sorted order.
Worst-case time Complexity : O(n^2)

sample execution:


'''

#taking input array from user
print("Enter elements of array to be sorted separated by commas: ")
Array = input().split(',')

i=0
j=1
while(i!=len(Array)):
	while(j!=len(Array)):
		if(int(Array[j])<int(Array[i])):
			temp=Array[i]
			Array[i]=Array[j]
			Array[j]=temp
			break
		else:
			j=j+1
	i=i+1
	j=i+1


print('sorted array is:'+str(Array))
