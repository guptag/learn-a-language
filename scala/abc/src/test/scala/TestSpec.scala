package learnalanguage.scala.abc.Tests

import collection.mutable.Stack
import org.scalatest._

class TestSpec extends FlatSpec {

  "A Stack" should "pop values in last-in-first-out order (abc)" in {
    val stack = new Stack[Int]
    stack.push(1)
    stack.push(2)
    assert(stack.pop() === 2)
    assert(stack.pop() === 1)
  }

  it should "throw NoSuchElementException if an empty stack is popped" in {
    val emptyStack = new Stack[String]
    intercept[NoSuchElementException] {
      emptyStack.pop()
    }
  }
}