package learnalanguage.scala.abc

case class Person4(fname: String, lname: String, age: Int) 

object Example4 {
	
	def printSenior(p: Person4): Unit = 
	  println(p.fname + " is senior! (test 2)")

	def senior(p1: Person4, p2: Person4): Person4 = 
	  if (p1.age > p2.age) p1 else p2 

	val people = List(Person4("F1", "L1", 17), 
	                   Person4("F2", "L2", 58),
	                   Person4("F3", "L3", 44))

	val p = people.reduceLeft(senior) 

	
	def main(args: Array[String]): Unit =
    	printSenior(p) 
}