;; load-file "basic_repl.clj"


;; hello world
(println "hello world")

;; basic hashmap lookup
(def users {"user1" {:password "password1" :number-of-items 10}
			"user2" {:password "password2" :number-of-items 20}
			"user3" {:password "password3" :number-of-items 30}
			"user4" {:password "password4" :number-of-items 40}})


;; (check-login "user1" "password1")
(defn check-login [username password]
	(let [actual-password ((users username) :password)]
		(= actual-password password)))
