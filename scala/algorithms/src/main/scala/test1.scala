package learnalanguage.scala.algorithms

case class Person1(fname: String, lname: String, age: Int) 

object Example1 {
	
	def printSenior(p: Person1): Unit = 
	  println(p.fname + " is senior! (test 2)")

	def senior(p1: Person1, p2: Person1): Person1 = 
	  if (p1.age > p2.age) p1 else p2 

	val people = List(Person1("F1", "L1", 17), 
	                   Person1("F2", "L2", 58),
	                   Person1("F3", "L3", 44))

	val p = people.reduceLeft(senior) 

	
	def main(args: Array[String]): Unit =
    	printSenior(p) 
}