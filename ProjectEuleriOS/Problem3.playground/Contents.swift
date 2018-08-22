//: Playground - noun: a place where people can play
//
//Problem 3
//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?


var number = 600851475143
var primes : [Int] = []

var largestPrime = 0

for i in stride(from: 3, to: number, by: 2){
    if i*i <= number{
        if number % i == 0{
            primes.append(i)
            print(i)
            number = number/i
            largestPrime = number
        }
    }
}
print("Largest Prime Number is \(largestPrime)")

