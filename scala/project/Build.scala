import sbt._
import Keys._

object LearnALanguage extends Build {
  val opts = Project.defaultSettings ++ Seq(
    scalaVersion := "2.10.2",
    resolvers += "Typesafe Repository" at "http://repo.typesafe.com/typesafe/releases/",
    libraryDependencies ++= Seq (
                                 "com.typesafe.akka" %% "akka-actor" % "2.1.0",
                                 "org.scalatest" %% "scalatest" % "1.9.2" % "test"
                                )
  )

  testOptions in Test += Tests.Argument("-oDF")

  lazy val root =
    Project(id = "root",
            base = file("."),
            settings = opts) aggregate (foundations, algorithms/*, dataprocessing, datastructures, networking, sysutils, webutils*/)
  lazy val foundations =
    Project(id = "foundations",
            base = file("foundations"),
            settings = opts)
  lazy val algorithms =
    Project(id = "algorithms",
            base = file("algorithms"),
            settings = opts)
  /*lazy val dataprocessing =
    Project(id = "dataprocessing",
            base = file("dataprocessing"),
            settings = opts)
  lazy val datastructures =
    Project(id = "datastructures",
            base = file("datastructures"),
            settings = opts)
  lazy val networking =
    Project(id = "networking",
            base = file("networking"),
            settings = opts)
  lazy val sysutils =
    Project(id = "sysutils",
            base = file("sysutils"),
            settings = opts) 
  lazy val webutils =
    Project(id = "webutils",
            base = file("webutils"),
            settings = opts) */ 
}