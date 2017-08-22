## Challenge 1: 

 a = true
 b = false
 puts a == b
 puts a != b


## Challenge 2: Nil

 fishsticks = nil
  puts fishsticks
  puts "#{fishsticks} + was here"
  puts #{fishsticks}
  puts fishsticks.class

## Challenge 3: Integers

 d = 13
    puts d
 e = 3.14
    puts e
 d = e
    puts d

## Challenge 4: Strings

 christine = "Hi, I'm Christine"
 likesTo = "long walks on the beach, kinda."
 tims = "#{christine} and I like #{likesTo}"
    puts tims
 g = "2"
 gToNumber = 2
    puts g.to_i + gToNumber

## Challenge 5: Input and Output

 def double(number)
    puts number *2
 double(8)

    puts "Hello Lovely, What is your name?"
 name = gets.chomp
    puts "What are your favorite activities?"
 activities = gets.chomp
    puts "#{name} would like to #{to_do}."

## Challenge 6: Arrays

 myFirstArray = []
 myFirstArray = ["Do", "Re", "Mi", "Fa", "So", "La", 9, 8, 7, 6]
    puts myFirstArray[-1]
    puts myFirstArray[0]

 myFirstArray[1] = "Joe"
 myFirstArray[0] = 3

 myFirstArray.push("true")
    puts myFirstArray[3].class

## Challenge 7: Hashes

 myFavoriteAnimals = {
    Ernest: "Otter",
    Edgar: "Donkey",
    Einstein: "Ostrich",
    Elvis: "Giraffe"
}
  myFavoriteAnimals["Edgar"] = "Bear"
myFavoriteMovie = {}
  myFavoriteMovie[:movie] = "Goodfellas"

## Challenge 8: Ranges

firstRange = (1..10)
 firstRange.to_a
secondRange = (1..1000)
 secondRange.to_a

firstRange.each do |number|
    puts number.to_s
end

x = 0 

while x < 50 
  puts secondRange[x]
x += 1
  end
OddStrings = firstRange.map do |number|
  if number.odd?
    number.to_s
  else
    number
   end
  end  




