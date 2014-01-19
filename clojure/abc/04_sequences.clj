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
