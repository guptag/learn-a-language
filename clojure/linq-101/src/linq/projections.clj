(ns linq.projections
  (:require [linq.data :refer :all]
            [clojure.string :as str]
            [clj-time.core :as time]
            [clj-time.local :as ltime]))



#_(-------------------------------

  ;; Select to produce a sequence of ints one higher than those in an existing array of ints

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

;; Select to return a sequence of just the names of a list of products

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

;; explicit function for map construct
(defn linq7a []
  (let [products products-list
        product-names (map (fn [x] (:product-name x)) products)]
   (doseq [name product-names]
     (println name))))



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

;; Return sequence of the uppercase and lowercase versions of each word in the original array.

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

;;  Select to produce a sequence containing text representations of digits and whether their length is even or odd.

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






#_(-----------------------------------

;; Select to produce a sequence containing some properties of Products,
;; including UnitPrice which is renamed to Price in the resulting type

;; public void Linq11()
;;{
;;    List<Product> products = GetProductList();
;;
;;    var productInfos =
;;        from p in products
;;        select new { p.ProductName, p.Category, Price = p.UnitPrice };
;;
;;    Console.WriteLine("Product Info:");
;;    foreach (var productInfo in productInfos)
;;    {
;;        Console.WriteLine("{0} is in the category {1} and costs {2} per unit.", productInfo.ProductName, productInfo.Category, productInfo.Price);
;;    }
;; }

--------------------------------------)

(defn linq11 []
  (let [products products-list
        product-infos
          (for [p products]
            { :product-name (:product-name p)
              :category (:category p)
              :price (:unit-price p)
            })]
    (println "Product Info")
     (doseq [p-info product-infos]
       (println (:product-name p-info) "is in the category" (:category p-info)
                "and costs" (:price p-info) "per unit"))))

;;(linq11)





#_(------------------------------------

;; Indexed Select clause to determine if the value of ints in an array
;; match their position in the array.

;; public void Linq12()
;; {
;;    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
;;
;;    var numsInPlace = numbers.Select((num, index) => new { Num = num, InPlace = (num == index) });
;;
;;    Console.WriteLine("Number: In-place?");
;;    foreach (var n in numsInPlace)
;;    {
;;        Console.WriteLine("{0}: {1}", n.Num, n.InPlace);
;;    }
;; }

------------------------------------)

(defn linq12 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
        nums-in-place
        (map-indexed (fn [i num] {:num num :in-place (= num i)}) numbers)]
    (println "Number: In-Place?")
    (doseq [n nums-in-place]
      (println (:num n) ": " (:in-place n)))))

;; (linq12)






#_(-------------------------------------

;;  Make a simple query that returns the text form of each digit less than 5.

;;  public void Linq13()
;;  {
;;    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
;;    string[] digits = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
;;
;;    var lowNums =
;;        from n in numbers
;;        where n < 5
;;        select digits[n];
;;
;;    Console.WriteLine("Numbers < 5:");
;;    foreach (var num in lowNums)
;;    {
;;        Console.WriteLine(num);
;;    }
;;  }
---------------------------------------------)

(defn linq13 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
        digits  ["zero" "one" "two" "three" "four" "five" "six" "seven" "eight" "nine"]
        low-nums (for [n numbers
                       :when (< n 5)]
                  (digits n))]
    (println "Numbers < 5")
    (doseq [num low-nums]
      (println num))))

;;(linq13)







#_(---------------------------------------------

;; Query that returns all pairs of numbers from both arrays such
;; that the number from numbersA is less than the number from numbersB.

;; public void Linq14()
;; {
;;    int[] numbersA = { 0, 2, 4, 5, 6, 8, 9 };
;;    int[] numbersB = { 1, 3, 5, 7, 8 };
;;
;;    var pairs =
;;        from a in numbersA
;;        from b in numbersB
;;        where a < b
;;        select new { a, b };
;;
;;    Console.WriteLine("Pairs where a < b:");
;;    foreach (var pair in pairs)
;;    {
;;        Console.WriteLine("{0} is less than {1}", pair.a, pair.b);
;;    }
;; }

-----------------------------------------------)

(defn linq14 []
  (let [numbers-a [0 2 4 5 6 8 9]
        numbers-b [1 3 5 7 8]
        pairs (for [a numbers-a
                    b numbers-b
                    :when (< a b)]
                {:a a, :b b})]
    (println "Pairs where a < b: ")
    (doseq [pair pairs]
      (println (:a pair) " is less than " (:b pair)))))

;;(linq14)







#_(---------------------------------------------

;; Select all orders where the order total is less than 500.00.

;; public void Linq15()
;; {
;;    List<Customer> customers = GetCustomerList();
;;
;;    var orders =
;;        from c in customers
;;        from o in c.Orders
;;        where o.Total < 500.00M
;;        select new { c.CustomerID, o.OrderID, o.Total };
;;
;;    ObjectDumper.Write(orders);
;;}

------------------------------------------------)

(defn linq15 []
  (let [customers customers-list
        orders
        (for [c customers
              o (:orders c)
              :when (> (:total o) 500)]
          {:customer-id (:customer-id c),
           :order-id (:order-id o)
           :total (:total o)})]
    (doseq [o orders]
      (println o))))

;;(linq15)







#_(---------------------------------------------

;; Compound from clause to select all orders where the order was made in 1998 or later.

;; public void Linq16()
;; {
;;    List<Customer> customers = GetCustomerList();
;;
;;    var orders =
;;        from c in customers
;;        from o in c.Orders
;;        where o.OrderDate >= new DateTime(1998, 1, 1)
;;        select new { c.CustomerID, o.OrderID, o.OrderDate };
;;
;;    ObjectDumper.Write(orders);
;;}
---------------------------------------------)

(defn linq16 []
  (let [customers customers-list
        orders
        (for [c customers
              o (:orders c)
              :when (time/after? (:order-date o) (time/date-time 1998 1 1))]
          {:customer-id (:customer-id c)
           :order-id (:order-id o)
           :order-date (:order-date o)})]
       (doseq [o orders] (println o))))

;;(linq16)




#_(---------------------------------------------

;; public void Linq17()
;; {
;;    List<Customer> customers = GetCustomerList();
;;
;;    var orders =
;;        from c in customers
;;        from o in c.Orders
;;        where o.Total >= 2000.0M
;;        select new { c.CustomerID, o.OrderID, o.Total };
;;
;;    ObjectDumper.Write(orders);
;; }

---------------------------------------------)

(defn linq17 []
  (let [customers customers-list
        orders
        (for [c customers
              o (:orders c)
              :when (>= (:total o) 2000)]
          {:customer-id (:customer-id c)
           :order-id (:order-id o)
           :total (:total o)})]
    (doseq [o orders] (println o))))

;;(linq17)





#_(---------------------------------------------

;; Multiple from clauses so that filtering on customers can be done before selecting their orders.
;; This makes the query more efficient by not selecting and then discarding orders
;; for customers outside of Washington.

;; public void Linq18()
;; {
;;    List<Customer> customers = GetCustomerList();
;;
;;    DateTime cutoffDate = new DateTime(1997, 1, 1);
;;
;;    var orders =
;;        from c in customers
;;        where c.Region == "WA"
;;        from o in c.Orders
;;        where o.OrderDate >= cutoffDate
;;        select new { c.CustomerID, o.OrderID };
;;
;;    ObjectDumper.Write(orders);
;; }
---------------------------------------------)

(defn linq18 []
  (let [cutoff-date (time/date-time 1997 1 1)
        customers customers-list
        orders
         (for [c customers
               :when (= (:region c) "WA")
               o (:orders c)
               :when (time/after? (:order-date o) cutoff-date)]
           {:customer-id (:customer-id c)
            :order-id  (:order-id o)})]
      (doseq [o orders] (println o))))

;;(linq18)





#_(---------------------------------------------

;; Select all orders, while referring to customers by the order in which they are returned from the query.

;; public void Linq19()
;; {
;;    List<Customer> customers = GetCustomerList();
;;
;;    var customerOrders =
;;        customers.SelectMany(
;;            (cust, custIndex) =>
;;            cust.Orders.Select(o => "Customer #" + (custIndex + 1) +
;;                                    " has an order with OrderID " + o.OrderID));
;;
;;    ObjectDumper.Write(customerOrders);
;; }
---------------------------------------------)

(defn linq19a []
  (let [customers customers-list
        customer-orders
        (map-indexed
         (fn [i c]
           (map #(str "Customer #" (inc i) " has an order with OrderID " (:order-id %1))
                (:orders c)))
          customers)]
    (doseq [c-order (flatten customer-orders)] (println c-order))))

;;(linq19a)


(defn linq19b []
  (let [customers customers-list
        customer-orders
        (for [[i c] (map-indexed vector customers)
              o (:orders c)]
          (str "Customer #" (inc i) " has an order with OrderID" (:order-id o)))]
    (doseq [x customer-orders] (println x))))

;;(linq19b)



(def examples [linq6 linq7a linq7b linq8 linq9a linq9b linq10 linq11 linq12 linq13
               linq14 linq15 linq16 linq17 linq18 linq19a linq19b])
