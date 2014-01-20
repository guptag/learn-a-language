(ns linq.projections
  (:require [linq.data :refer :all]
            [clojure.string :as str]
            [clj-time.core :as time]
            [clj-time.local :as ltime]))



#_(-------------------------------
  ;; // Select to produce a sequence of ints one higher than those in an existing array of ints
  ;; public void Linq6()
  ;; {
  ;;  int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
  ;;
  ;;   var numsPlusOne =
  ;;      from n in numbers
  ;;      select n + 1;

  ;;  Console.WriteLine("Numbers + 1:");
  ;;  foreach (var i in numsPlusOne)
  ;;  {
  ;;      Console.WriteLine(i);
  ;;  }
  ;; }
---------------------------------)

(defn linq6 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
        numbers-plus-one (map inc numbers)]
    (println "Numbers + 1")
    (doseq [n numbers-plus-one]
      (println n))))

;; (linq6)



#_(-------------------------------------

;; //select to return a sequence of just the names of a list of products
;; public void Linq7()
;; {
;;    List<Product> products = GetProductList();
;;
;;    var productNames =
;;        from p in products
;;        select p.ProductName;
;;
;;    Console.WriteLine("Product Names:");
;;    foreach (var productName in productNames)
;;    {
;;        Console.WriteLine(productName);
;;    }
;;}
-------------------------------------)

;; return names of products
;; explicit function for map construct
(defn linq7a []
  (let [products products-list
        product-names (map (fn [x] (:product-name x)) products)]
   (doseq [name product-names]
     (println name))))



;; return names of products
;; anonymous function for map construct
(defn linq7b []
  (let [products products-list
        product-names (map #(:product-name %) products)]
   (doseq [name product-names]
     (println name))))


;; (linq7a)
;; (linq7b)




#_(-------------------------------------
;; // Return text version of numbers in a sequence
;; public void Linq8()
;; {
;;    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
;;    string[] strings = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
;;
;;    var textNums =
;;        from n in numbers
;;        select strings[n];
;;
;;    Console.WriteLine("Number strings:");
;;    foreach (var s in textNums)
;;    {
;;        Console.WriteLine(s);
;;    }
;;}
---------------------------------------)

(defn linq8 []
   (let [numbers [5 4 1 3 9 8 6 7 2 0]
         strings ["Zero" "One" "Two" "Three" "Four" "Five" "Six" "Seven" "Eight" "Nine"]
         number-strings (map strings numbers)]
     (doseq [n number-strings]
       (println n))))

;;(linq8)





#_(----------------------------------
;; public void Linq9()
;; {
;;    string[] words = { "aPPLE", "BlUeBeRrY", "cHeRry" };
;;
;;    var upperLowerWords =
;;        from w in words
;;        select new { Upper = w.ToUpper(), Lower = w.ToLower() };
;;
;;    foreach (var ul in upperLowerWords)
;;    {
;;        Console.WriteLine("Uppercase: {0}, Lowercase: {1}", ul.Upper, ul.Lower);
;;    }
;; }
------------------------------------)

;; Return sequence of the uppercase and lowercase versions of each word in the original array.
;; with map
(defn linq9a []
  (let [words ["aPPLE" "BlUeBeRry" "cHeRyy"]
       lower-upper-words (map (fn [w] {:upper (str/upper-case w) :lower (str/lower-case w)}) words)]
    (doseq [word lower-upper-words]
      (println "Uppercase:" (:upper word) " Lowercase:" (:lower word)))))

;;(linq9a)

;; with for
(defn linq9b []
  (let [words ["aPPLE" "BlUeBeRry" "cHeRyy"]
       lower-upper-words (for [w words] {:upper (str/upper-case w) :lower (str/lower-case w)})]
    (doseq [word lower-upper-words]
      (println "Uppercase:" (:upper word) " Lowercase:" (:lower word)))))

;;(linq9b)




#_(---------------------------------
;;  public void Linq10()
;;  {
;;      int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
;;      string[] strings = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
;;
;;      var digitOddEvens =
;;          from n in numbers
;;          select new { Digit = strings[n], Even = (n % 2 == 0) };
;;
;;      foreach (var d in digitOddEvens)
;;      {
;;          Console.WriteLine("The digit {0} is {1}.", d.Digit, d.Even ? "even" : "odd");
;;      }
;;  }
-----------------------------------)

(defn linq10 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
       strings ["Zero" "One" "Two" "Three" "Four" "Five" "Six" "Seven" "Eight" "Nine"]
       digitOddEvens (for [n numbers] {:digit (strings n) :even (= 0 (mod n 2))})]
    (doseq [d digitOddEvens]
      (println "The digit" (:digit d) "is" (if (:even d) "even" "odd")))))

;;(linq10)




(def examples [linq6 linq7a linq7b linq8 linq9a linq9b linq10])