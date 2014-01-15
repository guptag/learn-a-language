;;; Credits: http://www.amazon.com/Clojure-Action-Amit-Rathore/dp/193518259


#_(-----------------
   Basic constructs
   -----------------)

;; load-file "basic_repl.clj"


;; hello world
(println "hello world")

;; doc
(doc +)


;; regex search docs
;;(find-doc "lazy")


;; spacing
(+ 1 2 3)
(+ 1, 2, 3, 4)

(def a-map {:a 1 :b 2 :c 3})
(println a-map)

(def a-map-withspaces {:a 1, :b 2, :c 3})
(println a-map-withspaces)


#_(----------------------
   Function Defnitions
   ---------------------)

;; regular function definition
;; notice 'defn'
(defn add-fn [x y]
    (+ x y))

(add-fn 2 3) ; execute function


;; anonymous function assigned to a variable
;; notice 'def'
(def add-anon-fn (fn [x y]
                   (+ x y)))

(add-anon-fn 10 50) ; execute function



#_(--------
   HashMap
   --------)

;; Use 'let' to temporarily name things

(def users {:User1 {:salary 60000 :title "Sr. Developer"}
            :User2 {:salary 55000 :title "Coordinator"}
            :User3 {:salary 50000 :title "Tech Writer"}})

(println users)
(println (keys users)) ;all keys of hashmap
(println (vals users)) ;all values of hashmap
(println (map :salary (vals users))) ;salary infomation of all users
(println (apply + (map :salary (vals users)))) ;total salary of all users




#_(--------
   let
   --------)

;; Use 'let' to temporarily name things
(defn average-salary [users]
  (let [user-data (vals users)
        all-salaries (map :salary user-data)
        total (apply + all-salaries)]
    (/ total (count user-data))))

(average-salary {:User1 {:salary 10000}
                 :User2 {:salary 15000}})



;; another example of let
;; declare a param that is dependent on others
(defn another-let-example []
  (let [first "hello"
        last "world"
        full (str first last)
        ]
    (println full)))

(another-let-example)


;; note the usage of underscore identifier
;; for unused params
(defn average-salary [users]
  (let [user-data (vals users)
        all-salaries (map :salary user-data)
        total (apply + all-salaries)
        _ (println "total salary: " total)]
    (/ total (count user-data))))

(average-salary {:User1 {:salary 10000}
                 :User2 {:salary 15000}})


#_(--------
     do
   ---------)

(defn show-do-usage []
  ;; group multiple s-expressions into one
  (do
    (println "1st s-expression")
    (println "2nd s-expression")
    (println "3rd s-expression")))
(show-do-usage)


#_(-----------------------
     try...catch...finally
   -----------------------)

(defn average-salary [users]
  (try
    (let [user-data (vals users)
          all-salaries (map :salary user-data)
          total (apply + all-salaries)
          _ (println "total salary: " total)]
      (/ total (count user-data)))
    (catch Exception e
      (println "Error: no users!"))))

(average-salary {})













