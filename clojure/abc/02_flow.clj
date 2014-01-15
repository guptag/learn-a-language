;;; Credits: http://www.amazon.com/Clojure-Action-Amit-Rathore/dp/193518259

#_(-----------------
   if and if-not
   -----------------)


(defn test-if-else [count]
  (if (= count 0)
      (println "if-test::if-block: Count is zero")
      (println "if-test::else-block: Count is not Zero")))

(defn test-if-not-else [count]
  ; execute if the condition
  (if-not (= count 0)
      (println "if-not-test::if-block: Count is not zero")
      (println "if-not-test::else-block: Count is Zero")))

(test-if-else 0)
(test-if-not-else 5)



#_(-----------------
   when and when-not
   -----------------)


(defn test-when [count]
  ; 'do' clause is not needed to wrap multiple statements
  ; no else block
  (when (= count 0)
      (println "when-test: statement1")
      (println "when-test: statement2")))

(defn test-when-not [count]
  ; 'do' clause is not needed to wrap multiple statements
  ; no else block
  (when-not (= count 0)
      (println "when-not-test: statement1")
      (println "when-not-test: statement2")))

(test-when 0)
(test-when-not 5)



#_(-----------------
   cond
   -----------------)

(defn test-cond [x]
  (cond
   (< x 0) (println "Negative")
   (= x 0) (println "Zero")
   :default (println "Positive")))

(test-cond 10)


#_(--------------------------------
   logical functions - and, or, not
   --------------------------------)

(defn test-and [id]
  (if (and (< id 10) (> id 5))
    (println "test-and: id is within range," id)
    (println "test-and: id is out of range," id)))

(test-and 7)
(test-and 2)


(defn test-or [id]
  (if (or (= id 10) (= id 20))
    (println "test-or: id is within range," id)
    (println "test-or: id is out of range," id)))

(test-or 10)
(test-or 2)