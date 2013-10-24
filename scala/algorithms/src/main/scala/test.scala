package learnalanguage.scala.algorithms

case class Person(fname: String, lname: String, age: Int) 

object Example {
	
	def printSenior(p: Person): Unit = 
	  println(p.fname + " is senior! (test)")

	def senior(p1: Person, p2: Person): Person = 
	  if (p1.age > p2.age) p1 else p2 

	val people = List(Person("F1", "L1", 17), 
	                   Person("F2", "L2", 58),
	                   Person("F3", "L3", 44))

	val p = people.reduceLeft(senior) 

	
	def main(args: Array[String]): Unit =
    	printSenior(p) 
}