;;; Credits:
;;; http://www.amazon.com/Clojure-Action-Amit-Rathore/dp/193518259
;;; http://clojuredocs.org/quickref/Clojure%20Core


;; for map reduce filter map-indexed


#_(-----------------
   map-indexed
   ;; function takes in (index, item) and returns the mapped object
   -----------------)

;; [0, "learning"] [1, "clojure"] [2, "is"] [3, "fun"]
(map-indexed (fn [idx itm] [idx itm]) ["learning" "clojure" "is" "fun"])
(map-indexed vector ["learning" "clojure" "is" "fun"])

;; ["learning"] ["clojure"]
(map-indexed (fn [idx itm] [itm]) ["learning" "clojure"])



#_(------------------
    map
---------------------)

;; Use array as a map function
(map ["Two" "Three" "one"] [0 2 1])

;; Use hash-map as a map function
(map {2 "Two" 3 "Three" 0 "Zero"} [0 2 3])




#_(------------------
    take
---------------------)

;; (1 2 3)
(take 3 [1 2 3 4 5 6])

;; (6 7 8)
(take 3 (drop 5 (range 1 11)))


