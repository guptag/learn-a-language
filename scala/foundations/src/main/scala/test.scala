package learnalanguage.scala.abc

case class Person3(fname: String, lname: String, age: Int) 

object Example3 {
	
	def printSenior(p: Person3): Unit = 
	  println(p.fname + " is senior! (test)")

	def senior(p1: Person3, p2: Person3): Person3 = 
	  if (p1.age > p2.age) p1 else p2 

	val people = List(Person3("F1", "L1", 17), 
	                   Person3("F2", "L2", 58),
	                   Person3("F3", "L3", 44))

	val p = people.reduceLeft(senior) 

	
	def main(args: Array[String]): Unit =
    	printSenior(p) 
}