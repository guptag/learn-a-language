

#_(-----------------
   defrecord
   -----------------)

;; define types
(defrecord Company [name ticker price address])
(defrecord Address [street city state zip])

;; create instance
(def Microsoft (Company. "Microsoft" "MSFT" 38.00
                  (Address. "One Microsoft Way" "Redmond" "WA" 98052)))


;; retrieve property
(:ticker Microsoft)
(:address Microsoft)
(-> Microsoft :address :city) ;;thread-first macro

;; update property
(assoc Microsoft :price 45.00)

;; update zip
(update-in Microsoft [:address :zip] inc)



#_(-----------------
   str
   -----------------)

;; ""
(str)

;; "123"
(str 1 2 3)

;; "1 2 3"
(apply str [1 2 3])

;; [1 2 3]
(str [1 2 3])






