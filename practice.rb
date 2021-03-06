# # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
p ("-----Divisble By 3----")
def print_numbers_divisible_by_three
  index = 1
  while index <= 1000
    if index % 3 == 0
      puts index
    end
    index += 1
  end
end
print_numbers_divisible_by_three


# # Write a method that accepts an array of strings and prints out every other string.
p("-------Every Other String------")
def print_every_other_item(strings)
  index = 0
  strings.each do |string|
    if index % 2 == 0
      puts string
    end
    index += 1
  end
end
print_every_other_item(["a", "b", "c", "d", "e"])


# # Write a method that accepts an array of numbers and returns the sum.
p("-------Sum of Array------")
def compute_sum(numbers)
  sum = 0
  numbers.each do |number|
    sum += number
  end
  return sum
end
puts compute_sum([2, 4, 5])


# Start with the hash: city_populations = {chi: 2700000}
# Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
p("-------Update Hash------")
city_populations = {chi: 2700000}
city_populations[:nyc] = 8400000
city_populations[:sf] = 800000
p city_populations



# # Write a method that prints out every number from 1 to 100. 
p("-------Count to 100------")
def one_to_one_hundred
  i = 1
  while i <= 100
    p i
    i += 1
  end
end
one_to_one_hundred

# # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

p("-------Every Other Number------")
def every_other_number
  i = 1
  while i <= 100
    p i
    i += 2
  end
end
every_other_number


# # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

p("-------How Many 55s------")
def count55s(numbers)
  count = 0
  #loop through each number
  numbers.each do |number|
    if number == 55
    count += 1
    end
  end
  return count
end

p count55s([1, 2, 55, 3, 55, 5, 6, 55])


# # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

p("-------Add Awesomesauce to Array------")
def awesomesauced(strings)
  new_array = []
#loop through strings
strings.each do |string|
  new_array << string
  #insert "awesomesauce" after each string
  new_array << 'awesomesauce'
end
#but not last
new_array.pop
new_array
end
p awesomesauced(["a", "b", "c", "d", "e"])

# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}

p("-------Update Chair------")
item_amounts = {chair: 5, table: 2}
item_amounts[:chair] = 3
p item_amounts
# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}
p "------Adding to Hash------"
item_amounts = {chair: 5, table: 2}
item_amounts[:desk] = 7
p item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
p("-------Factorial------")
def factor(number)
  i = 1
  while number > 0
    i = i * number
    number -= 1    
  end
  return i
end
p factor(5)

# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
p("-------Add Two Arrays------")
def addarrays(array1, array2)
  i = 0
  new_array = []
  while i < array1.length
    new_array[i] = array1[i] + array2[i]
    i += 1
  end
  return new_array
end

p addarrays([5, 2, 3], [4, 5, 6])